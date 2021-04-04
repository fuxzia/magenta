<template>
  <div :class="computedClasses">
    <span v-if="$slots.default || label">
      <slot v-if="$slots.default"/>
      <template v-else-if="label">
        {{ label }}
      </template>
    </span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { Sizes } from '../../types/Heading'

export default defineComponent({
  name: 'MHeading',
  props: {
    size: {
      type: String as PropType<Sizes>,
      default: 'sm',
      validator: (value: string) => (Object.values(Sizes) as string[]).includes(value),
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
    const { size, subtitle } = props
    const computedClasses = computed(() => {
      return [
        'mag-heading',
        {
          'mag-heading-sm': ([Sizes.Small, Sizes.Default] as string[]).includes(size),
          'mag-heading-md': size === Sizes.Medium,
          'mag-heading-lg': size === Sizes.Large,
          'mag-heading-subtitle': subtitle,
        }
      ]
    })

    return { computedClasses }
  }
})
</script>

<style lang="scss" scoped>

@import '../../assets/scss/variables.scss';

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
