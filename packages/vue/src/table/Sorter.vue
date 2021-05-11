<template>
  <div :class="computedClasses">
    <Icon icon="chevron-up" />
    <Icon icon="chevron-down" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { TableSortDirections } from '@magenta-ui/types'
import Icon from '../icon/Feather.vue'

export default defineComponent({
  name: 'MTableSorter',
  components: {
    Icon,
  },
  props: {
    direction: {
      type: String as PropType<TableSortDirections>,
      default: TableSortDirections.Reset,
      validator: (value: string) => (Object.values(TableSortDirections) as string[]).includes(value),
    },
  },
  setup: (props) => {
    const computedClasses = computed(() => {
      return [
        'mag-table-sorter',
        {
          'mag-table-sorter-active': props.direction !== TableSortDirections.Reset,
          [`mag-table-sorter-${props.direction}`]: props.direction !== TableSortDirections.Reset,
        },
      ]
    })

    return { computedClasses }
  },
})
</script>

<style lang="scss" scoped>

@import '@magenta-ui/styles/scss/variables.scss';

.mag-table-sorter {
  display: inline-flex;
  flex-direction: column;
  margin-top: -6px;
  margin-left: 5px;
  line-height: 1;
  overflow: visible;

  :deep(.mag-icon) {
    opacity: .4;
    transition: $transition-base;

    &:first-child {
      top: 6px;
      position: relative;
    }
  }

  &.mag-table-sorter-asc {
    :deep(.mag-icon:first-child) {
      opacity: 1;
    }
  }

  &.mag-table-sorter-desc {
    :deep(.mag-icon:last-child) {
      opacity: 1;
    }
  }
}
</style>
