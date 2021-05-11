<template>
  <div class="mag-table-wrapper">
    <Scroller
      :columns="computedColumns"
      :selectable="selectable"
    >
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
              <Checkbox
                v-if="th.MAGENTA_UI_IS_SELECTOR"
                :checked="computedAllRowsSelected"
                class="mag-table-selector"
                @click="selectAllRows"
              />
              <template v-else>
                {{ th.label }}
              </template>
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
              :selected="row.MAGENTA_UI_IS_SELECTED"
              :ellipsis="ellipsis"
            >
              <Checkbox
                v-if="th.MAGENTA_UI_IS_SELECTOR"
                :checked="row.MAGENTA_UI_IS_SELECTED"
                class="mag-table-selector"
                @click="selectRow(row, ri)"
              />
              <slot
                v-else
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
import { TableColumn, TableData, TableRow, TableSortDirections } from '@magenta-ui/types'
import Cell from './Cell.vue'
import Checkbox from '../checkbox/Checkbox.vue'
import Scroller from './Scroller.vue'

export default defineComponent({
  name: 'MTable',
  components: {
    Cell,
    Checkbox,
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
    hoverable: {
      type: Boolean,
      default: false,
    },
    selectable: {
      type: Boolean,
      default: false,
    },
    bordered: {
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
  emits: ['select', 'sort'],
  setup: (props, { emit }) => {
    const refTable = ref(null as HTMLTableElement)
    const list = ref([])

    const computedColumns = computed(() => {
      const { columns, selectable, bordered } = props

      const columnsFixed = columns.filter(item => item.fixed && item.width)
      const columnsRemaining = columns.filter(item => !item.fixed || (item.fixed && !item.width))
      
      const selector = {
        width: bordered ? 68 : 38,
        align: 'center',
        fixed: columnsFixed.length > 0,
        MAGENTA_UI_IS_SELECTOR: true,
      }
      const columnSelector = selectable ? [selector] : []
      
      return [
        ...columnSelector,
        ...columnsFixed,
        ...columnsRemaining,
      ]
    })

    const computedData = computed(() => {
      return list.value.length > 0 ? list.value as [] : props.data
    })

    const computedAllRowsSelected = computed(() => {
      return computedData.value.filter((item: TableRow) => item.MAGENTA_UI_IS_SELECTED).length >= computedData.value.length
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

    const clearMagentaKeys = (data: Array<TableRow>) => {
      const keys = [
        'MAGENTA_UI_IS_SELECTED',
        'MAGENTA_UI_IS_SELECTOR',
      ]
      return data.map((item) => {
        const newItem = { ...item }
        keys.forEach(key => delete newItem[key])
        return { ...newItem }
      })
    }

    const getSelectedRows = () => {
      const selected = computedData.value as Array<TableRow>
      return clearMagentaKeys(selected.filter((item) => item.MAGENTA_UI_IS_SELECTED))
    }

    const selectRow = (row: TableRow, index: number) => {
      const data = [...computedData.value]
      data[index] = {
        ...row,
        MAGENTA_UI_IS_SELECTED: row.MAGENTA_UI_IS_SELECTED ? false : true,
      }
      list.value = [...data]
      emit('select', [...getSelectedRows()])
    }

    const selectAllRows = () => {
      const data = [...computedData.value]
      const currentSelected = data.filter((item: TableRow) => item.MAGENTA_UI_IS_SELECTED).length
      const statusAllSelected = currentSelected !== data.length ? true : false
      
      list.value = data.map((item: TableRow) => ({
        ...item,
        MAGENTA_UI_IS_SELECTED: statusAllSelected,
      }))
      emit('select', [...getSelectedRows()])
    }

    const sort = ({ key, direction, sorter }) => {
      const data = [...computedData.value]
      
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

      list.value = data.sort(listSorter)
      emit('sort', {
        key,
        direction,
        data: clearMagentaKeys([...list.value]),
      })
    }

    onMounted(() => {
      const rows = refTable.value.querySelectorAll('tbody tr, thead tr')
      rows.forEach(row => resizeObserver.observe(row))
    })

    onBeforeUnmount(() => {
      const rows = refTable.value.querySelectorAll('tbody tr, thead tr')
      rows.forEach(row => resizeObserver.unobserve(row))
    })

    return { refTable, computedTableClasses, computedColumns, computedAllRowsSelected, computedData, sort, selectRow, selectAllRows }
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
          background-color: $table-cell-hoverable-bg !important;
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

    .mag-table-selector {
      position: relative;
      margin: 0;
      top: 1px;
    }
  }
}
</style>
