<template>
  <i :class="computedClasses">
    <svg
      class="animation-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      />
      <path
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  </i>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { SpinnerSizes } from '@magenta-ui/types'

export default defineComponent({
  name: 'MSpinner',
  props: {
    size: {
      type: String as PropType<SpinnerSizes>,
      default: SpinnerSizes.Default,
      validator: (value: string) => (Object.values(SpinnerSizes) as string[]).includes(value),
    },
  },
  setup: (props) => {
    const computedClasses = computed(() => {
      const { size } = props

      return [
        'mag-spinner', 
        {
          'mag-spinner-md': size === SpinnerSizes.Medium,
          'mag-spinner-sm': size === SpinnerSizes.Small,
          'mag-spinner-xl': size === SpinnerSizes.Large,
        },
      ]
    })

    return { computedClasses }
  },
})
</script>

<style lang="scss" scoped>

@import '@magenta-ui/styles/scss/variables.scss';

.mag-spinner {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  color: $primary-color;
  vertical-align: -.125em;

  svg {
    animation: $animation-spin;

    circle {
      opacity: .25;
    }

    path {
      opacity: .75;
    }
  }
}
</style>
