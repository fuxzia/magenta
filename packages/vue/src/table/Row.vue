<template>
  <tr
    ref="refRow"
    :class="computedRowClasses"
  >
    <Cell
      v-for="(th, i) in columns"
      :key="th.key"
      :position="i"
      :all-columns="columns"
      :width="th.width"
      :fixed="th.fixed"
      :align="th.align"
      :selected="row.MAGENTA_UI_IS_SELECTED"
      :bordered="bordered"
      :ellipsis="ellipsis"
    >
      <Checkbox
        v-if="th.MAGENTA_UI_IS_COLLAPSE"
        :checked="row.MAGENTA_UI_IS_COLLAPSED"
        :custom-icons="collapseIcons"
        class="mag-table-collapser"
        @click="collapseRow"
      />
      <Checkbox
        v-if="th.MAGENTA_UI_IS_SELECTOR"
        :checked="row.MAGENTA_UI_IS_SELECTED"
        class="mag-table-selector"
        @click="selectRow"
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
  <tr
    v-if="collapsible"
    ref="refRowCollapse"
    :class="computedRowCollapseClasses"
  >
    <Cell
      :colspan="columns.length + 3"
      :bordered="bordered"
      :ellipsis="ellipsis"
    >
      <slot
        name="row-collapsed"
        :item="row"
      />
    </Cell>
  </tr>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, onBeforeUnmount, PropType, ref, nextTick } from 'vue'
import { TableColumn, TableData, TableEvents, TableRow } from '@magenta-ui/types'
import { useHelpers } from './use/helpers'
import Cell from './Cell.vue'
import Checkbox from '../checkbox/Checkbox.vue'

export default defineComponent({
  name: 'MTableRow',
  components: {
    Cell,
    Checkbox,
  },
  props: {
    row: {
      type: Object as PropType<TableRow>,
      default: () => ({}),
    },
    data: {
      type: Array as PropType<TableData<any>>,
      default: null,
    },
    columns: {
      type: Array as PropType<TableColumn[]>,
      default: null,
    },
    ellipsis: {
      type: Boolean,
      default: false,
    },
    bordered: {
      type: Boolean,
      default: false,
    },
    collapsible: {
      type: Boolean,
      default: false,
    },
    hoverable: {
      type: Boolean,
      default: false,
    },
    position: {
      type: Number,
      default: 0,
    },
  },
  emits: ['sort', 'select', 'collapse', 'update-row'],
  setup: (props, { emit }) => {

    const { collapseIcons, clearMagentaKeys, resizeObserver } = useHelpers()

    const computedRowClasses = computed(() => {
      const { hoverable } = props
      
      return [
        'mag-table-row',
        {
          'mag-table-row-hoverable': hoverable,
        },
      ]
    })

    const computedRowCollapseClasses = computed(() => {
      const { row } = props

      return [
        'mag-table-row-collapse',
        {
          'mag-table-row-collapse-open': row['MAGENTA_UI_IS_COLLAPSED'],
        },
      ]
    })

    const selectRow = () => updateRow('MAGENTA_UI_IS_SELECTED', TableEvents.Select)

    const collapseRow = () => { 
      const collapsed = updateRow('MAGENTA_UI_IS_COLLAPSED', TableEvents.Collapse)
      const fixedCols = refRow.value.querySelectorAll('.mag-table-cell-fixed')
      nextTick(() => {
        
        if (fixedCols.length > 0) {
          const colCollapsed = refRowCollapse.value.querySelector('td:first-child') as HTMLTableColElement
          colCollapsed.style.borderLeft = '0'

          fixedCols.forEach((target: HTMLTableColElement) => {
            if (collapsed) {
              target.style.height = `${target.scrollHeight + refRowCollapse.value.scrollHeight + 1}px`
            } else {
              target.style.height = `${refRow.value.scrollHeight}px`
            }
          })
        }
      })
    }

    const updateRow = (key: string, event: TableEvents): boolean => {
      const { row, position } = props
      const data = [...props.data]
      const value = row[key] ? false : true
      data[position] = {
        ...row,
        [key]: value,
      }
      const all = clearMagentaKeys(data.filter((item) => item[key]))
      
      emit(event, { row: data[position], all })
      emit('update-row', { row: data[position], position })
      
      return value
    }

    const refRow = ref(null as HTMLTableRowElement)
    const refRowCollapse = ref(null as HTMLTableRowElement)
    onMounted(() => resizeObserver.observe(refRow.value))
    onBeforeUnmount(() => resizeObserver.unobserve(refRow.value))

    return {
      computedRowClasses,
      computedRowCollapseClasses,
      selectRow,
      collapseRow,
      collapseIcons,
      refRow,
      refRowCollapse,
    }
  },
})
</script>

<style lang="scss" scoped>

@import '@magenta-ui/styles/scss/variables.scss';

.mag-table-row {
  
  &-collapse {
    display: none;

    &.mag-table-row-collapse-open {
      display: table-row;
    }
  }

  &.mag-table-row-hoverable:hover {
    :deep(.mag-table-cell) {
      transition: $table-transition;
      background-color: $table-cell-hoverable-bg !important;
    }
  }
}
</style>
