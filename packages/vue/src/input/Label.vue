<template>
  <label
    v-if="label || slots.label"
    :style="computedLabelStyles"
    class="mag-input-label"
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

<style lang="scss" scoped>

@import '@magenta-ui/styles/scss/variables.scss';

.mag-input-label {
  flex-grow: 1;
  cursor: text;
  color: $input-label-font-color;
  font-size: $input-label-font-size;
  font-weight: $input-label-font-weight;
  margin-bottom: $spacing-xs;
}

.mag-input-horizontal {

  &.mag-input-sm {
    .mag-input-label {
      margin: $input-sm-height / 2 $spacing-xs 0 0;
    }
  }

  &.mag-input-md {
    .mag-input-label {
      margin: $input-md-height / 2 $spacing-xs 0 0;
    }
  }

  &.mag-input-lg {
    .mag-input-label {
      margin: $input-lg-height / 2 $spacing-xs 0 0;
    }
  }

  .mag-input-label {
    transform: translateY(-50%);
  }
}
</style>
