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
              :position="i"
              :all-columns="computedColumns"
              :column-key="th.key"
              :width="th.width"
              :fixed="th.fixed"
              :align="th.align"
              :sortable="th.sortable"
              :header="true"
              @sort="sort"
            >
              {{ th.label }}
            </Cell>
          </tr>
        </thead>
        <tbody v-if="computedData">
          <tr
            v-for="(row, ri) in computedData"
            :key="ri"
          >
            <Cell
              v-for="(th, i) in computedColumns"
              :key="th.key"
              :position="i"
              :all-columns="computedColumns"
              :width="th.width"
              :fixed="th.fixed"
              :align="th.align"
              :ellipsis="ellipsis"
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
import { TableColumn, TableData } from '@magenta-ui/types'
import Cell from './Cell.vue'
import Scroller from './Scroller.vue'
import { TableSortDirections } from '@magenta-ui/types'

export default defineComponent({
  name: 'MTable',
  components: {
    Cell,
    Scroller,
  },
  props: {
    columns: {
      type: Array as PropType<TableColumn[]>,
      default: null,
    },
    data: {
      type: Array as PropType<TableData<unknown>>,
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
    const list = ref([])

    const computedColumns = computed(() => {
      const { columns } = props
      return [
        ...columns.filter(item => item.fixed && item.width),
        ...columns.filter(item => !item.fixed || (item.fixed && !item.width)),
      ]
    })

    const computedData = computed(() => {
      return list.value.length > 0 ? list.value : props.data
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
          tr.querySelectorAll('td, th').forEach((td) => {
            (td as HTMLElement).style.height = `${tr.scrollHeight}px`
          })
        }
      }
    })

    const sort = ({ key, direction, sorter }) => {
      list.value = [...props.data]
      
      if (direction === TableSortDirections.Reset) {
        return
      }
      
      const defaultSorter = (itemA: TableColumn, itemB: TableColumn) => {
        let a = itemA[key] || ''
        let b = itemB[key] || ''

        switch (typeof a) {
          case 'string':
            a = a ? a.toUpperCase() : ''
            break

          case 'number':
            a = a || 0
            break

          default:
          case 'boolean':
            a = a ? 1 : 0
            break
        }

        switch (typeof b) {
          case 'string':
            b = b ? b.toUpperCase() : ''
            break

          case 'number':
            b = b || 0
            break

          default:
          case 'boolean':
            b = b ? 1 : 0
            break
        }

        if (direction === TableSortDirections.Up) {
          return (a < b) ? -1 : (a > b) ? 1 : 0
        } else {
          return (b < a) ? -1 : (b > a) ? 1 : 0
        }
      }

      const listSorter = typeof sorter === 'function' ? sorter : defaultSorter

      list.value = list.value.sort(listSorter)
    }

    onMounted(() => {
      const rows = refTable.value.querySelectorAll('tbody tr, thead tr')
      rows.forEach(row => resizeObserver.observe(row))
    })

    onBeforeUnmount(() => {
      const rows = refTable.value.querySelectorAll('tbody tr, thead tr')
      rows.forEach(row => resizeObserver.unobserve(row))
    })

    return { refTable, computedTableClasses, computedColumns, computedData, sort }
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

    &.mag-table-hoverable { 
      > tbody tr:hover {
        > td {
          transition: $table-transition;
          background: $table-cell-hoverable-bg;
        }
      }
    }
    
    &.mag-table-rounded { 
      > thead tr th {
        &:first-child {
          border-top-left-radius: $table-rounded-radius;
        }
        &:last-child {
          border-top-right-radius: $table-rounded-radius;
        }
      }
      > tbody tr:last-child td {
        &:first-child {
          border-bottom-left-radius: $table-rounded-radius;
        }
        &:last-child {
          border-bottom-right-radius: $table-rounded-radius;
        }
      }
    }
    
    &.mag-table-bordered { 
      > thead tr th,
      > tbody tr td {
        border-left: 1px solid $table-border-color;

        &:first-child {
          padding-left: $table-cell-padding-horizontal;
        }
        &:last-child {
          padding-right: $table-cell-padding-horizontal;
          border-right: 1px solid $table-border-color;
        }
      }

      > thead tr th {
        border-top: 1px solid $table-border-color;
      }
    }
  }
}
</style>
