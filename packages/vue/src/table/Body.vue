<template>
  <tbody class="mag-table-body">
    <Row
      v-for="(row, i) in data"
      :key="i"
      :position="i"
      :row="row"
      :data="data"
      :columns="columns"
      :ellipsis="ellipsis"
      :bordered="bordered"
      :hoverable="hoverable"
      :collapsible="collapsible"
      @select="emitSelect"
      @collapse="emitCollapse"
      @update-row="emitUpdateRow"
    >
      <template #row-collapsed="{ item }">
        <slot
          name="row-collapsed"
          :item="item"
        />
      </template>
    </Row>
  </tbody>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { TableColumn, TableData, TableEvents } from '@magenta-ui/types'
import Row from './Row.vue'

export default defineComponent({
  name: 'MTableBody',
  components: {
    Row,
  },
  props: {
    data: {
      type: Array as PropType<TableData<unknown>>,
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
    hoverable: {
      type: Boolean,
      default: false,
    },
    collapsible: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['sort', 'select', 'collapse', 'update-row'],
  setup: (_, { emit }) => {

    const emitSelect = (payload) => emit(TableEvents.Select, payload)
    const emitCollapse = (payload) => emit(TableEvents.Collapse, payload)
    const emitUpdateRow = (payload) => emit('update-row', payload)

    return {
      emitSelect,
      emitCollapse,
      emitUpdateRow,
    }
  },
})
</script>
