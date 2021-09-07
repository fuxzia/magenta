import { computed, ref } from 'vue'
import { TableColumn, TableData, TableRow } from '@magenta-ui/types'

type UseDataReturn = {
  [key: string]: any
}

// type UseDataPayload = {
//   data: TableData<any>,
//   columns: Array<TableColumn>,
//   selectable: boolean,
//   bordered: boolean,
//   collapsible: boolean,
// }

export const useData = (): UseDataReturn => {
  // const list = ref([])
  const data = ref([] as TableData<any>)
  const columns = ref([] as Array<TableColumn>)
  
  // const data = computed(() => {
  //   return list.value.length > 0 ? list.value as [] : payload.data
  // })

  // const columns = computed(() => {
  //   const { columns, selectable, bordered, collapsible } = payload
  
  //   const columnsFixed = columns.filter(item => item.fixed && item.width)
  //   const columnsRemaining = columns.filter(item => !item.fixed || (item.fixed && !item.width))
  //   const width = bordered ? 68 : 38
  
  //   const collapse = {
  //     width,
  //     align: 'center',
  //     fixed: columnsFixed.length > 0,
  //     MAGENTA_UI_IS_COLLAPSE: true,
  //   }
  
  //   const selector = {
  //     width,
  //     align: 'center',
  //     fixed: columnsFixed.length > 0,
  //     MAGENTA_UI_IS_SELECTOR: true,
  //   }
  
  //   const columnCollapse = collapsible ? [collapse] : []
  //   const columnSelector = selectable ? [selector] : []
  
  //   return [
  //     ...columnCollapse,
  //     ...columnSelector,
  //     ...columnsFixed,
  //     ...columnsRemaining,
  //   ]
  // })

  const buildColumns = (tableColumns: Array<TableColumn>, selectable: boolean, bordered: boolean, collapsible: boolean): void => {  
    const columnsFixed = tableColumns.filter(item => item.fixed && item.width)
    const columnsRemaining = tableColumns.filter(item => !item.fixed || (item.fixed && !item.width))
    const width = bordered ? 68 : 38
  
    const collapse = {
      width,
      align: 'center',
      fixed: columnsFixed.length > 0,
      MAGENTA_UI_IS_COLLAPSE: true,
    }
  
    const selector = {
      width,
      align: 'center',
      fixed: columnsFixed.length > 0,
      MAGENTA_UI_IS_SELECTOR: true,
    }
  
    const columnCollapse = collapsible ? [collapse] : []
    const columnSelector = selectable ? [selector] : []
  
    columns.value = [
      ...columnCollapse,
      ...columnSelector,
      ...columnsFixed,
      ...columnsRemaining,
    ] as Array<TableColumn>
  }

  const selectedRows = computed(() => {
    return data.value.filter((item: TableRow) => item.MAGENTA_UI_IS_SELECTED).length >= data.value.length
  })

  const collapsedRows = computed(() => {
    return data.value.filter((item: TableRow) => item.MAGENTA_UI_IS_COLLAPSED).length >= data.value.length
  })

  const isAllRowsCollapsed = computed(() => {
    return data.value.filter((item: TableRow) => item.MAGENTA_UI_IS_COLLAPSED).length >= data.value.length
  })

  return {
    tableData: computed(() => data.value),
    tableColumns: computed(() => columns.value),
    buildColumns,
    selectedRows,
    collapsedRows,
    isAllRowsCollapsed,
  }
}