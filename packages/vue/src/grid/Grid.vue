<template>
  <div
    :class="computedClasses"
    :style="computedStyles"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, getCurrentInstance, PropType } from 'vue'
import { GridGutters } from '@magenta-ui/types'

export default defineComponent({
  name: 'MGrid',
  props: {
    columns: {
      type: Array as PropType<number[]>,
      default: null,
    },
    gutter: {
      type: [Number, String] as PropType<number | GridGutters>,
      default: null,
      validator: (value: string | number) => {
        if (typeof value === 'string') {
          return (Object.values(GridGutters) as string[]).includes(value)
        }
        return typeof value === 'number'
      },
    },
  },
  setup: (props) => {
    console.log(getCurrentInstance())
    const computedClasses = computed(() => {
      const { gutter } = props
      
      return [
        'mag-grid',
        {
          [`mag-grid-gutter-${gutter}`]: gutter && typeof gutter === 'string' && (Object.values(GridGutters) as string[]).includes(gutter),
        },
      ]
    })

    const computedStyles = computed(() => {
      const { columns, gutter } = props
      const styles = {}
      if (columns) {
        styles['grid-template-columns'] = columns
          .map((col) => `${col}fr`)
          .join(' ')
      }
      if (gutter && typeof gutter === 'number') {
        styles['column-gap'] = `${gutter}px`
      }

      return styles
    })

    return {
      computedClasses,
      computedStyles,
    }
  },
})
</script>

<style lang="scss" scoped>

@import '@magenta-ui/styles/scss/variables.scss';

.mag-grid {
  display: grid;
  grid-template-columns: repeat($grid-size-columns, 1fr);
  grid-template-rows: 1fr;
  grid-auto-rows: auto;
  column-gap: $grid-gutter;
}
</style>
