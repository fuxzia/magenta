<template>
  <div class="mag-table-wrapper">
    <Scroller :columns="tableColumns">
      <table :class="tableClasses">
        <Header
          v-bind="$props"
          :data="tableData"
          :columns="tableColumns"
          @sort="emitSort"
          @select="emitSelect"
          @collapse="emitCollapse"
          @update-all-rows="updateAllRows"
        />
        <Body
          v-bind="$props"
          :data="tableData"
          :columns="tableColumns"
          :ellipsis="ellipsis"
          :bordered="bordered"
          :hoverable="hoverable"
          @select="emitSelect"
          @collapse="emitCollapse"
          @update-row="updateRow"
        >
          <template #row-collapsed="{ item }">
            <slot
              name="row-collapsed"
              :item="item"
            />
          </template>
        </Body>
      </table>
    </Scroller>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue'
import { TableColumn, TableData, TableEvents, TableRow } from '@magenta-ui/types'
import Body from './Body.vue'
import Header from './Header.vue'
import Scroller from './Scroller.vue'

export default defineComponent({
  name: 'MTable',
  components: {
    Body,
    Header,
    Scroller,
  },
  props: {
    data: {
      type: Array as PropType<TableData<any>>,
      default: null,
    },
    columns: {
      type: Array as PropType<TableColumn[]>,
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
    collapsible: {
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
  emits: ['sort', 'select', 'collapse'],
  setup: (props, { emit }) => {
    const localData = ref([])

    const tableColumns = computed(() => {
      const { columns, selectable, bordered, collapsible } = props

      const columnsFixed = columns.filter(item => item.fixed && item.width)
      const columnsRemaining = columns.filter(item => !item.fixed || (item.fixed && !item.width))
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

      return [
        ...columnCollapse,
        ...columnSelector,
        ...columnsFixed,
        ...columnsRemaining,
      ]
    })

    const tableData = computed(() => {
      return localData.value.length > 0
        ? localData.value as []
        : props.data
    })

    const tableClasses = computed(() => {
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

    const updateRow = (payload: { row: TableRow, position: number }) => {
      const { position, row } = payload
      const data = [...tableData.value]
      data[position] = row
      localData.value = data

      console.log(localData.value)
    }

    const updateAllRows = (payload: { rows: TableData<any> }) => {
      localData.value = payload.rows
    }

    const emitSort = (payload) => emit(TableEvents.Sort, payload)
    const emitSelect = (payload) => emit(TableEvents.Select, payload)
    const emitCollapse = (payload) => emit(TableEvents.Collapse, payload)

    return {
      emitSort,
      emitSelect,
      emitCollapse,
      tableData,
      tableColumns,
      tableClasses,
      updateAllRows,
      updateRow,
    }
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

    &.mag-table-bordered {
      :deep(.mag-table-cell) {
        &:first-child {
          border-left: 1px solid $table-border-color;
        }
      }
    }

    &.mag-table-rounded {
      :deep(tr.mag-table-row:nth-last-child(2) .mag-table-cell) {
        &:first-child {
          border-bottom-left-radius: $table-rounded-radius;
        }
        &:last-child {
          border-bottom-right-radius: $table-rounded-radius;
        }
      }

      :deep(.mag-table-header .mag-table-cell) {
        &:first-child {
          border-top-left-radius: $table-rounded-radius;
        }
        &:last-child {
          border-top-right-radius: $table-rounded-radius;
        }
      }
    }
  }
}
</style>
