<template>
  <div
    ref="dropdownMenuContainer"
    :class="computedClasses"
    @mouseover="handlerHoverOpenTrigger"
    @mouseleave="handlerHoverCloseTrigger"
  >
    <span
      class="mag-dropdown-trigger"
      @click="handlerClickTrigger"
    >
      <slot />
    </span>
    <div
      class="mag-dropdown-menu"
      @click="close"
    >
      <slot name="menu" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onUnmounted, PropType, ref, watch } from 'vue'
import { Positions, Triggers } from '@magenta-ui/types/Dropdown'

export default defineComponent({
  name: 'MDropdown',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    trigger: {
      type: String as PropType<Triggers>,
      default: Triggers.Default,
      validator: (value: string) => (Object.values(Triggers) as string[]).includes(value),
    },
    position: {
      type: String as PropType<Positions>,
      default: Positions.Default,
      validator: (value: string) => (Object.values(Positions) as string[]).includes(value),
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
      if (props.trigger === Triggers.Hover) {
        visible.value = true
      }
    }

    const handlerHoverCloseTrigger = () => {
      if (props.trigger === Triggers.Hover) {
        close()
      }
    }

    const handlerClickTrigger = () => {
      if (props.trigger === Triggers.Click) {
        visible.value = !visible.value
      }
    }

    if (props.trigger === Triggers.Click) {
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
    > .mag-dropdown-menu {
      opacity: 1;
      visibility: visible;
    }
  }

  &.mag-dropdown-bottom-right {
    > .mag-dropdown-menu {
      right: 0;
    }
  }

  > .mag-dropdown-menu {
    z-index: $dropdown-z-index;
    position: absolute;
    margin-top: 4px;
    opacity: 0;
    visibility: hidden;
    overflow: hidden;
    min-width: $dropdown-min-width;
    background: $dropdown-bg;
    border: $dropdown-border;
    transition: $dropdown-transition;
    border-radius: $dropdown-radius;
    box-shadow: $dropdown-shadow;
  }
}
</style>
