<template>
  <div :class="computedClasses" />
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { SpacerSizes } from '@magenta-ui/types'

export default defineComponent({
  name: 'MSpacer',
  props: {
    size: {
      type: String as PropType<SpacerSizes>,
      default: SpacerSizes.Default,
      validator: (value: string) => (Object.values(SpacerSizes) as string[]).includes(value),
    },
  },
  setup: (props) => {
    const computedClasses = computed(() => {
      const { size } = props

      return [
        'mag-spacer', 
        {
          'mag-spacer-sm': size === SpacerSizes.Small,
          'mag-spacer-md': size === SpacerSizes.Medium,
          'mag-spacer-lg': size === SpacerSizes.Large,
          'mag-spacer-xlg': size === SpacerSizes.XLarge,
          'mag-spacer-xxlg': size === SpacerSizes.XXLarge,
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
