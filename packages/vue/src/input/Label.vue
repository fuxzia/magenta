<template>
  <label
    v-if="label || slots.label"
    :style="computedLabelStyles"
  >
    <slot name="label">
      {{ label }}
    </slot>
  </label>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, Slot } from 'vue'
import { InputAlignments } from '@magenta-ui/types'

export default defineComponent({
  name: 'MInput',
  props: {
    slots: {
      type: Object as PropType<Slot>,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    alignment: {
      type: String as PropType<InputAlignments>,
      default: InputAlignments.Default,
      validator: (value: string) => (Object.values(InputAlignments) as string[]).includes(value),
    },
    labelWidth: {
      type: [Number, String],
      default: '200px',
    },
  },
  emits: ['change', 'update:modelValue'],
  setup: (props) => {

    const computedLabelStyles = computed(() => {
      const { alignment, labelWidth } = props
      let styles = null

      if (alignment === InputAlignments.Horizontal) {
        const width = typeof labelWidth === 'number' ? `${labelWidth}px` : labelWidth
        styles = { flex: `0 0 ${width}` }
      }

      return styles
    })

    return { computedLabelStyles }
  },
})
</script>
