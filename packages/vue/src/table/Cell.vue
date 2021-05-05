<template>
  <component
    :is="tag"
    :style="computedCellStyle"
    :class="computedCellClasses"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { Column } from '@magenta-ui/types/Table'

export default defineComponent({
  name: 'MTable',
  props: {
    header: {
      type: Boolean,
      default: false,
    },
    fixed: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
      default: null,
    },
    ellipsis: {
      type: Boolean,
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
  setup: (props) => {
    const tag = computed(() => props.header ? 'th' : 'td')

    const computedCellClasses = computed(() => {
      const { header, fixed, width, ellipsis } = props
      return [
        'mag-table-cell',
        {
          'mag-table-cell-header': header,
          'mag-table-cell-fixed': fixed && width,
          'mag-table-cell-ellipsis': ellipsis,
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

    return { tag, computedCellStyle, computedCellClasses }
  },
})
</script>

<style lang="scss" scoped>

@import '@magenta-ui/styles/scss/variables.scss';

.mag-table-cell {
  position: sticky;
  border-bottom: 1px solid $border-color-base;
  text-align: left;
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
}
</style>
