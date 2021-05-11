<template>
  <span
    v-if="computedHasIcon.left"
    class="mag-input-icon-left"
  >
    <slot name="icon-left">
      <Icon
        v-if="icon || iconLeft"
        :icon="icon || iconLeft"
      />
    </slot>
  </span>
  <span
    v-if="computedHasIcon.right"
    class="mag-input-icon-right"
  >
    <slot name="icon-right">
      <Icon
        v-if="iconRight"
        :icon="iconRight"
      />
    </slot>
  </span>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { InputTypes } from '@magenta-ui/types'
import Icon from '../icon/Feather.vue'

export default defineComponent({
  name: 'MInputIcons',
  components: {
    Icon,
  },
  props: {
    slots: {
      type: Object,
      default: () => ({}),
    },
    icon: {
      type: String,
      default: null,
    },
    iconLeft: {
      type: String,
      default: null,
    },
    iconRight: {
      type: String,
      default: null,
    },
    inputType: {
      type: String as PropType<InputTypes>,
      default: InputTypes.Default,
      validator: (value: string) => (Object.values(InputTypes) as string[]).includes(value),
    },
  },
  emits: ['change', 'update:modelValue'],
  setup: (props) => {

    const computedHasIcon = computed(() => {
      const { slots, icon, iconLeft, iconRight } = props
      return {
        left: (icon || iconLeft || slots.icon || slots['icon-left']),
        right: (iconRight || slots['icon-right']),
      }
    })

    return { computedHasIcon }
  },
})
</script>

<style lang="scss" scoped>

@import '@magenta-ui/styles/scss/variables.scss';    

.mag-input-icon-left, .mag-input-icon-right {
  color: $input-icon-color;
  position: absolute;
  transform: translateY(-50%);
}
</style>
