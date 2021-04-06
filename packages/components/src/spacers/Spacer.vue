<template>
  <div :class="computedClasses"/>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { Sizes } from '@magenta-ui/types/Spacer'

export default defineComponent({
  name: 'MSpacer',
  props: {
    size: {
      type: String as PropType<Sizes>,
      default: Sizes.Default,
      validator: (value: string) => (Object.values(Sizes) as string[]).includes(value),
    },
  },
  setup: (props) => {
    const { size } = props
    const computedClasses = computed(() => {
      return [
        'mag-spacer', 
        {
          'mag-spacer-sm': size === Sizes.Small,
          'mag-spacer-md': ([Sizes.Medium, Sizes.Default] as string[]).includes(size),
          'mag-spacer-lg': size === Sizes.Large,
          'mag-spacer-2lg': size === Sizes.LargeX2,
          'mag-spacer-3lg': size === Sizes.LargeX3,
          'mag-spacer-4lg': size === Sizes.LargeX4,
          'mag-spacer-5lg': size === Sizes.LargeX5,
          'mag-spacer-6lg': size === Sizes.LargeX6,
        }
      ]
    })

    return { computedClasses }
  }
})
</script>

<style lang="scss" scoped>

@import '@magenta-ui/styles/scss/variables.scss';

.mag-spacer {
  width: 100%;
  display: block;
  
  @each $spacing, $value in $spacings {
    &.mag-spacer-#{$spacing} {
      height: $value;
    }
  }
}
</style>
