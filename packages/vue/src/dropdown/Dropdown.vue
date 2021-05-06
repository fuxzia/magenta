<template>
  <div
    ref="dropdownMenuContainer"
    :class="computedClasses"
    @click="handlerClickTrigger"
    @mouseover="handlerHoverOpenTrigger"
    @mouseleave="handlerHoverCloseTrigger"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onUnmounted, PropType, ref, watch } from 'vue'
import { DropdownPositions, DropdownTriggers } from '@magenta-ui/types'

export default defineComponent({
  name: 'MDropdown',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    trigger: {
      type: String as PropType<DropdownTriggers>,
      default: DropdownTriggers.Default,
      validator: (value: string) => (Object.values(DropdownTriggers) as string[]).includes(value),
    },
    position: {
      type: String as PropType<DropdownPositions>,
      default: DropdownPositions.Default,
      validator: (value: string) => (Object.values(DropdownPositions) as string[]).includes(value),
    },
  },
  emits: ['visibility-change'],
  setup: (props, { emit }) => {
    const visible = ref(false)
    const dropdownMenuContainer = ref(null)

    const computedClasses = computed(() => {
      const { position } = props
      
      return [
        'mag-dropdown', 
        `mag-dropdown-${position}`,
        {
          'mag-dropdown-open': visible.value,
        },
      ]
    })

    watch(visible, (value: boolean) => {
      emit('visibility-change', value)
    })

    watch(() => props.open, (value: boolean) => {
      visible.value = value
    })

    const close = () => {
      visible.value = false
    }

    const handlerHoverOpenTrigger = () => {
      if (props.trigger === DropdownTriggers.Hover) {
        visible.value = true
      }
    }

    const handlerHoverCloseTrigger = () => {
      if (props.trigger === DropdownTriggers.Hover) {
        close()
      }
    }

    const handlerClickTrigger = () => {
      if (props.trigger === DropdownTriggers.Click) {
        visible.value = !visible.value
      } else if (props.trigger === DropdownTriggers.Hover) {
        visible.value = false
      }
    }

    if (props.trigger === DropdownTriggers.Click) {
      const documentClick = (e: Event) => {
        let el = dropdownMenuContainer.value
        let target = e.target
        if (( el !== target) && !el.contains(target)) {
          visible.value = false
        }
      }

      onUnmounted(() => {
        document.removeEventListener('click', documentClick)
      })

      document.addEventListener('click', documentClick)
    }

    return {
      computedClasses,
      close,
      dropdownMenuContainer,
      handlerClickTrigger,
      handlerHoverCloseTrigger,
      handlerHoverOpenTrigger,
    }
  },
})
</script>

<style lang="scss" scoped>

@import '@magenta-ui/styles/scss/variables.scss';

.mag-dropdown {
  position: relative;

  &.mag-dropdown-open {
    :deep(.mag-dropdown-menu) {
      opacity: 1;
      visibility: visible;
    }
  }

  &.mag-dropdown-bottom-right {
    :deep(.mag-dropdown-menu) {
      right: 0;
    }
  }
}
</style>
