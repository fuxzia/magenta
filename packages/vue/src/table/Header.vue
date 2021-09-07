<template>
  <thead class="mag-table-header">
    <tr class="mag-table-row-header">
      <Cell
        v-for="(th, i) in columns"
        :key="i"
        :position="i"
        :all-columns="columns"
        :column-key="th.key"
        :width="th.width"
        :fixed="th.fixed"
        :align="th.align"
        :bordered="bordered"
        :sortable="th.sortable"
        :header="true"
        @sort="sortRows"
      >
        <Checkbox
          v-if="th.MAGENTA_UI_IS_COLLAPSE"
          :checked="isAllRowsCollapsed"
          :custom-icons="collapseIcons"
          class="mag-table-collapser"
          @click="collapseAllRows"
        />
        <Checkbox
          v-if="th.MAGENTA_UI_IS_SELECTOR"
          :checked="isAllRowsSelected"
          class="mag-table-selector"
          @click="selectAllRows"
        />
        <template v-else>
          {{ th.label }}
        </template>
      </Cell>
    </tr>
  </thead>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { TableColumn, TableData, TableEvents, TableRow, TableSortDirections } from '@magenta-ui/types'
import { useHelpers } from './use/helpers'
import Cell from './Cell.vue'
import Checkbox from '../checkbox/Checkbox.vue'

export default defineComponent({
  name: 'MTableHeader',
  components: {
    Cell,
    Checkbox,
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
  },
  emits: ['sort', 'select', 'collapse', 'update-all-rows'],
  setup: (props, { emit }) => {

    const { collapseIcons, clearMagentaKeys } = useHelpers()

    const isAllRowsSelected = computed(() => {
      return props.data.filter((item: TableRow) => item.MAGENTA_UI_IS_SELECTED).length >= props.data.length
    })
    
    const isAllRowsCollapsed = computed(() => {
      return props.data.filter((item: TableRow) => item.MAGENTA_UI_IS_COLLAPSED).length >= props.data.length
    })

    const selectAllRows = () => updateAllRows('MAGENTA_UI_IS_SELECTED', TableEvents.Select)
    
    const collapseAllRows = () => updateAllRows('MAGENTA_UI_IS_COLLAPSED', TableEvents.Collapse)

    const updateAllRows = (key: string, event: TableEvents) => {
      const data = [...props.data]
      const currentStatus = data.filter((item: TableRow) => item[key]).length
      const updatedRows = data.map((item: TableRow) => ({
        ...item,
        [key]: currentStatus !== data.length ? true : false,
      }))

      const target = clearMagentaKeys(props.data.filter((item) => item[key]))

      emit(event, { target })
      emit('update-all-rows', { rows: updatedRows })
    }

    const sortRows = ({ key, direction, sorter }) => {
      const defaultSorter = (itemA: TableRow, itemB: TableRow, key: string, direction: TableSortDirections): number => {
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

      const data = [...props.data]

      if (direction === TableSortDirections.Reset) {
        return
      }

      const listSorter = typeof sorter === 'function' ? sorter : defaultSorter

      emit(TableEvents.Sort, {
        key,
        direction,
        data: clearMagentaKeys(data.sort(listSorter)),
      })
    }

    return {
      sortRows,
      selectAllRows,
      collapseAllRows,
      collapseIcons,
      isAllRowsSelected,
      isAllRowsCollapsed,
    }
  },
})
</script>
