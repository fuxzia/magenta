<template>
  <div :class="computedClasses" />
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
    const computedClasses = computed(() => {
      const { size } = props

      return [
        'mag-spacer', 
        {
          'mag-spacer-sm': size === Sizes.Small,
          'mag-spacer-md': ([Sizes.Medium, Sizes.Default] as string[]).includes(size),
          'mag-spacer-lg': size === Sizes.Large,
          'mag-spacer-xlg': size === Sizes.XLarge,
          'mag-spacer-xxlg': size === Sizes.XXLarge,
        },
      ]
    })

    return { computedClasses }
  },
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
