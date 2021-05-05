<template>
  <div class="mag-table-wrapper">
    <Scroller :columns="computedColumns">
      <table
        ref="refTable"
        :class="computedTableClasses"
      >
        <thead v-if="computedColumns">
          <tr>
            <Cell
              v-for="(th, i) in computedColumns"
              :key="i"
              :width="th.width"
              :fixed="th.fixed"
              :align="th.align"
              :position="i"
              :all-columns="computedColumns"
              :header="true"
            >
              {{ th.label }}
            </Cell>
          </tr>
        </thead>
        <tbody v-if="data">
          <tr
            v-for="(row, ri) in data"
            :key="ri"
          >
            <Cell
              v-for="(th, i) in computedColumns"
              :key="i"
              :width="th.width"
              :fixed="th.fixed"
              :align="th.align"
              :ellipsis="ellipsis"
              :position="i"
              :all-columns="computedColumns"
            >
              <slot
                :name="th.key"
                :item="row"
              >
                {{ row[th.key] || '' }}
              </slot>
            </Cell>
          </tr>
        </tbody>
      </table>
    </Scroller>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, onBeforeUnmount, PropType, ref } from 'vue'
import { Column, Data } from '@magenta-ui/types/Table'
import Cell from './Cell.vue'
import Scroller from './Scroller.vue'

export default defineComponent({
  name: 'MTable',
  components: {
    Cell,
    Scroller,
  },
  props: {
    columns: {
      type: Array as PropType<Column[]>,
      default: null,
    },
    data: {
      type: Array as PropType<Data<unknown>>,
      default: null,
    },
    bordered: {
      type: Boolean,
      default: false,
    },
    hoverable: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    ellipsis: {
      type: Boolean,
      default: false,
    },
  },
  setup: (props) => {
    const refTable = ref(null as HTMLTableElement)

    const computedColumns = computed(() => {
      const { columns } = props
      return [
        ...columns.filter(item => item.fixed && item.width),
        ...columns.filter(item => !item.fixed || (item.fixed && !item.width)),
      ]
    })

    const computedTableClasses = computed(() => {
      const { bordered, hoverable, rounded } = props

      return [
        'mag-table',
        {
          'mag-table-rounded': rounded,
          'mag-table-bordered': bordered,
          'mag-table-hoverable': hoverable,
        },
      ]
    })

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const tr = entry.target as HTMLTableRowElement
        if (tr) {
          tr.querySelectorAll('td').forEach((td) => {
            td.style.height = `${tr.scrollHeight}px`
          })
        }
      }
    })

    onMounted(() => {
      const rows = refTable.value.querySelectorAll('tbody tr')
      rows.forEach(row => resizeObserver.observe(row))
    })

    onBeforeUnmount(() => {
      const rows = refTable.value.querySelectorAll('tbody tr')
      rows.forEach(row => resizeObserver.unobserve(row))
    })

    return { refTable, computedTableClasses, computedColumns }
  },
})
</script>

<style lang="scss" scoped>

@import '@magenta-ui/styles/scss/variables.scss';

.mag-table-wrapper {
  position: relative;
  width: 100%;

  .mag-table {
    width: 100%;
    margin: 0;
    padding: 0;
    border-collapse: separate;
    border-spacing: 0;
    white-space: nowrap;

    &.mag-table-hoverable { 
      > tbody tr:hover {
        > td {
          transition: $transition-base;
          background: $cool-gray-100;
        }
      }
    }
    
    &.mag-table-rounded { 
      > thead tr th {
        &:first-child {
          border-top-left-radius: $radius-lg;
        }
        &:last-child {
          border-top-right-radius: $radius-lg;
        }
      }
      > tbody tr:last-child td {
        &:first-child {
          border-bottom-left-radius: $radius-lg;
        }
        &:last-child {
          border-bottom-right-radius: $radius-lg;
        }
      }
    }
    
    &.mag-table-bordered { 
      > thead tr th,
      > tbody tr td {
        border-left: 1px solid $border-color-base;

        &:first-child {
          padding-left: $spacing-sm;
        }
        &:last-child {
          padding-right: $spacing-sm;
          border-right: 1px solid $border-color-base;
        }
      }

      > thead tr th {
        border-top: 1px solid $border-color-base;
      }
    }
  }
}
</style>
