<template>
  <component
    :is="tag"
    :style="computedCellStyle"
    :class="computedCellClasses"
    @click="handleCellClick"
  >
    <slot />
    <Sorter
      v-if="sortable"
      :direction="sortDirection"
    />
  </component>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue'
import { Column, Aligns } from '@magenta-ui/types/Table'
import { TableSortDirections } from '@magenta-ui/types'
import Sorter from './Sorter.vue'

export default defineComponent({
  name: 'MTableCell',
  components: {
    Sorter,
  },
  props: {
    columnKey: {
      type: String,
      default: null,
    },
    header: {
      type: Boolean,
      default: false,
    },
    fixed: {
      type: Boolean,
      default: false,
    },
    align: {
      type: String as PropType<Aligns>,
      default: Aligns.Default,
      validator: (value: string) => (Object.values(Aligns) as string[]).includes(value),
    },
    width: {
      type: Number,
      default: null,
    },
    ellipsis: {
      type: Boolean,
      default: false,
    },
    sortable: {
      type: [Boolean, Function],
      default: false,
    },
    position: {
      type: Number,
      default: 0,
    },
    allColumns: {
      type: Array as PropType<Column[]>,
      default: null,
    },
  },
  emits: ['sort'],
  setup: (props, { emit }) => {
    const sortCount = ref(0)
    const sortDirection = ref(null)

    const tag = computed(() => props.header ? 'th' : 'td')

    const computedCellClasses = computed(() => {
      const { header, fixed, width, ellipsis, align, sortable } = props
      return [
        'mag-table-cell',
        `mag-table-cell-align-${align.toLowerCase()}`,
        {
          'mag-table-cell-header': header,
          'mag-table-cell-fixed': fixed && width,
          'mag-table-cell-ellipsis': ellipsis,
          'mag-table-cell-sortable': sortable,
        },
      ]
    })

    const computedCellStyle = computed(() => {
      const styles = {}
      const { width, fixed, position, allColumns } = props
      
      if (width) {
        styles['width'] = `${width}px`
        styles['min-width'] = `${width}px`
        styles['max-width'] = `${width}px`

        if (fixed) {
          styles['position'] = 'absolute'
          styles['left'] = 0

          if (position > 0) {
            const left = allColumns.map((item, index) => {
              return ((index + 1) <= position && item.fixed && item.width)
                ? item.width
                : 0
            }).reduce((a, b) => a + b)

            styles['left'] = `${left}px`
          }
        }
      }

      return styles
    })

    const handleCellClick = () => {
      if (props.sortable) {
        handleSort()
      }
    }

    const handleSort = () => {
      sortCount.value++

      switch (sortCount.value) {
        case 1:
          sortDirection.value = TableSortDirections.Up
          break

        case 2:
          sortDirection.value = TableSortDirections.Down
          break

        default:
          sortCount.value = 0
          sortDirection.value = TableSortDirections.Reset
      }

      emit('sort', {
        key: props.columnKey,
        direction: sortDirection.value,
        sorter: props.sortable,
      })
    }

    return { tag, computedCellStyle, computedCellClasses, handleCellClick, sortDirection }
  },
})
</script>

<style lang="scss" scoped>

@import '@magenta-ui/styles/scss/variables.scss';

.mag-table-cell {
  position: sticky;
  border-bottom: 1px solid $border-color-base;
  vertical-align: top;
  padding: $spacing-sm;
  font-size: $font-size-base;
  background: $white;
  word-wrap: break-word;
  white-space: normal;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }

  &.mag-table-cell-fixed {
    z-index: 2;
  }

  &.mag-table-cell-header {
    font-size: $font-size-sm;
    text-transform: uppercase;
    font-weight: $font-weight-bold;
    color: $font-color-muted;
    color: $cool-gray-400;
    color: $font-color-contrast;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &.mag-table-cell-align-left {
    text-align: left;
  }

  &.mag-table-cell-align-right {
    text-align: right;
  }

  &.mag-table-cell-align-center {
    text-align: center;
  }

  &.mag-table-cell-ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    
    :deep(*) {
      white-space: nowrap !important;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  &.mag-table-cell-sortable {
    cursor: pointer;
    transition: $transition-base;
    
    &:hover {
      background-color: $cool-gray-100;
    }
  }
}
</style>
