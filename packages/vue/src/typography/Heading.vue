<template>
  <div :class="computedClasses">
    <span v-if="$slots.default || label">
      <slot v-if="$slots.default" />
      <template v-else-if="label">
        {{ label }}
      </template>
    </span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { HeadingSizes } from '@magenta-ui/types'

export default defineComponent({
  name: 'MHeading',
  props: {
    size: {
      type: String as PropType<HeadingSizes>,
      default: 'sm',
      validator: (value: string) => (Object.values(HeadingSizes) as string[]).includes(value),
    },
    label: {
      type: String,
      default: null,
    },
    subtitle: {
      type: Boolean,
      default: false,
    },
  },
  setup: (props) => {
    const computedClasses = computed(() => {
      const { size, subtitle } = props
      
      return [
        'mag-heading',
        {
          'mag-heading-sm': size === HeadingSizes.Small,
          'mag-heading-md': size === HeadingSizes.Medium,
          'mag-heading-lg': size === HeadingSizes.Large,
          'mag-heading-subtitle': subtitle,
        },
      ]
    })

    return { computedClasses }
  },
})
</script>

<style lang="scss" scoped>

@import '@magenta-ui/styles/scss/variables.scss';

.mag-heading {
  color: $heading-font-color;
  font-family: $heading-font-family;
  line-height: $heading-line-height;

  &.mag-heading-sm {
    font-size: $heading-sm-font-size;
    font-weight: $heading-sm-font-weight;

    &.mag-heading-subtitle {
      font-size: $heading-sm-font-size * .8;
    }
  }

  &.mag-heading-md {
    font-size: $heading-md-font-size;
    font-weight: $heading-md-font-weight;
    
    &.mag-heading-subtitle {
      font-size: $heading-md-font-size * .8;
    }
  }

  &.mag-heading-lg {
    font-size: $heading-lg-font-size;
    font-weight: $heading-lg-font-weight;

    &.mag-heading-subtitle {
      font-size: $heading-lg-font-size * .8;
    }
  }

  &.mag-heading-subtitle {
    color: $heading-subtitle-font-color;
  }
}

</style>
