<template>
  <div
    :style="computedScrollerStyles"
    :class="computedScrollerClasses"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { Column } from '@magenta-ui/types/Table'

export default defineComponent({
  name: 'MTableScroller',
  props: {
    columns: {
      type: Array as PropType<Column[]>,
      default: null,
    },
  },
  setup: (props) => {
    const computedScrollerClasses = computed(() => {
      const hasFixedColumn = props.columns.filter(item => item.fixed && item.width).length > 0

      return [
        'mag-table-scroller',
        {
          'mag-table-scroller-with-fixed-column': hasFixedColumn,
        },
      ]
    })

    const computedScrollerStyles = computed(() => {
      const styles = {}
      const margin = props.columns
        .map(item => item.fixed && item.width && typeof item.width === 'number' ? item.width : 0)
        .reduce((a, b) => a + b)

      styles['margin-left'] = `${margin}px`
      return styles
    })

    return { computedScrollerStyles, computedScrollerClasses }
  },
})
</script>

<style lang="scss" scoped>

@import '@magenta-ui/styles/scss/variables.scss';

.mag-table-scroller {
  overflow: auto;

  &.mag-table-scroller-with-fixed-column {

    &:before {
      z-index: 2;
      content: ' ';
      position: absolute;
      top: 0;
      height: 100%;
      width: 12px;
      background: linear-gradient(90deg, $cool-gray-400, $white);
      opacity: .3;
      border-left: 1px solid $border-color-base;
    }
  }
}
</style>
