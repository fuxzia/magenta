<template>
  <component
    :is="tag"
    :style="computedCellStyle"
    :class="computedCellClasses"
    @click="handleCellClick"
  >
    <div class="mag-table-cell-content-wrapper">
      <div class="mag-table-cell-content">
        <slot />
      </div>
      <Sorter
        v-if="sortable"
        :direction="sortDirection"
      />
    </div>
  </component>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue'
import { TableColumn, TableAlignments, TableSortDirections } from '@magenta-ui/types'
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
      type: String as PropType<TableAlignments>,
      default: TableAlignments.Default,
      validator: (value: string) => (Object.values(TableAlignments) as string[]).includes(value),
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
    selected: {
      type: Boolean,
      default: false,
    },
    position: {
      type: Number,
      default: 0,
    },
    allColumns: {
      type: Array as PropType<TableColumn[]>,
      default: null,
    },
  },
  emits: ['sort'],
  setup: (props, { emit }) => {
    const sortCount = ref(0)
    const sortDirection = ref(null)

    const tag = computed(() => props.header ? 'th' : 'td')

    const computedCellClasses = computed(() => {
      const { header, fixed, width, ellipsis, align, sortable, selected } = props

      return [
        'mag-table-cell',
        `mag-table-cell-align-${align.toLowerCase()}`,
        {
          'mag-table-cell-header': header,
          'mag-table-cell-fixed': fixed && width,
          'mag-table-cell-ellipsis': ellipsis,
          'mag-table-cell-sortable': sortable,
          'mag-table-cell-selected': selected,
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
  position: relative;
  border-bottom: 1px solid $table-border-color;
  vertical-align: $table-cell-vertical-align;
  padding: $table-cell-padding-vertical $table-cell-padding-horizontal;
  font-size: $table-cell-font-size;
  background: $table-cell-bg;
  word-wrap: break-word;
  white-space: $table-cell-white-space;
  overflow: hidden;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }

  &.mag-table-cell-fixed {
    z-index: 2;

    .mag-table-cell-content-wrapper {
      height: 100%;
      
      @if($table-cell-vertical-align == 'top') {
        align-items: flex-start;
      }

      @if($table-cell-vertical-align == 'middle') {
        align-items: center;
      }

      @if($table-cell-vertical-align == 'bottom') {
        align-items: flex-end;
      }
    }
  }

  &.mag-table-cell-header {
    font-size: $table-cell-header-font-size;
    text-transform: $table-cell-header-text-transform;
    font-weight: $table-cell-header-font-weight;
    color: $table-cell-header-font-color;

    .mag-table-cell-content {
      white-space: $table-cell-header-white-space !important;
      overflow: hidden !important;
      text-overflow: ellipsis !important;
    }
  }

  &.mag-table-cell-align-left {
    text-align: left;

    .mag-table-cell-content-wrapper {
      justify-content: flex-start;
    }
  }

  &.mag-table-cell-align-right {
    text-align: right;

    .mag-table-cell-content-wrapper {
      justify-content: flex-end;
    }
  }

  &.mag-table-cell-align-center {
    text-align: center;

    .mag-table-cell-content-wrapper {
      justify-content: center;
    }
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
    transition: $table-transition;
    
    &:hover {
      background-color: $table-cell-sortable-hover-bg;
    }
  }

  &.mag-table-cell-selected {
    background-color: $table-cell-selected-bg !important;
  }

  .mag-table-cell-content-wrapper {
    display: flex;
    justify-content: center;
    
    .mag-table-cell-content {
      flex: 0 1 auto;
      white-space: normal;
      overflow: hidden;
    }

    :deep(.mag-table-sorter) {
      flex: 0;
    }
  }
}
</style>
