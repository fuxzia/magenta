<template>
  <button :class="computedClasses">
    <span v-if="$slots.default || label">
      <slot v-if="$slots.default"/>
      <template v-else-if="label">
        {{ label }}
      </template>
    </span>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { Sizes, Shapes, Types } from '../../types/Buttons'

export default defineComponent({
  name: 'MButton',
  props: {
    type: {
      type: String as PropType<Types>,
      default: Types.Default,
      validator: (value: string) => (Object.values(Types) as string[]).includes(value),
    },
    label: {
      type: String,
      default: null,
    },
    size: {
      type: String as PropType<Sizes>,
      default: Sizes.Default,
      validator: (value: string) => (Object.values(Sizes) as string[]).includes(value),
    },
    shape: {
      type: String as PropType<Shapes>,
      default: Shapes.Default,
      validator: (value: string) => (Object.values(Shapes) as string[]).includes(value),
    },
    loading: {
      type: Boolean,
      default: false,
    },
    outline: {
      type: Boolean,
      default: false,
    },
  },
  setup: (props) => {
    const { label } = props
    const computedClasses = computed(() => {
      return [
        'mag-button', 
        {
          'mag-button-primary': ([Types.Primary, Types.Default] as string[]).indexOf(props.type) !== -1,
          'mag-button-secondary': props.type === Types.Secondary,
          'mag-button-circle': props.shape === Shapes.Circle,
          'mag-button-rounded': props.shape === Shapes.Rounded,
          'mag-button-square': ([Shapes.Square, Shapes.Default] as string[]).indexOf(props.shape) !== -1,
          'mag-button-sm': props.size === Sizes.Small,
          'mag-button-md': ([Sizes.Medium, Sizes.Default] as string[]).indexOf(props.size) !== -1,
          'mag-button-xl': props.size === Sizes.Large,
          'mag-button-loading': props.loading,
          'mag-button-outline': props.outline,
        }
      ]
    })

    return { computedClasses, label }
  }
})
</script>

<style lang="scss" scoped>

@import '../../assets/scss/variables.scss';

.mag-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  outline: none;
  cursor: pointer;
  border-width: $button-border-size;
  background: $button-bg-primary;
  color: $button-font-color;
  font-weight: $button-font-weight;
  font-family: $font-family-base;
  font-size: $font-size-base;
  transition: $transition-base;
  
  &:focus {
    box-shadow: 0 0 0 calc(4px) lighten($button-bg-primary, 40%);
  }

  &:active {
    box-shadow: 0 0 0 calc(4px) lighten($button-bg-primary, 40%);
  }

  &:hover {
    background: lighten($button-bg-primary, 5%);
  }

  &.mag-button-secondary {
    background: lighten($button-bg-primary, 40%);
    color: $button-bg-primary;

    &:hover {
      background: lighten($button-bg-primary, 42%);
    }
  }

  &.mag-button-sm {
    height: $button-sm-height;
    padding: $button-sm-padding-vertical $button-sm-padding-horizontal;
    font-size: $button-sm-font-size;

    &.mag-button-square {
      border-radius: $button-sm-radius;
    }

    &.mag-button-circle {
      width: $button-sm-height;
    }
  }

  &.mag-button-md {
    height: $button-md-height;
    padding: $button-md-padding-vertical $button-md-padding-horizontal;

    &.mag-button-square {
      border-radius: $button-md-radius;
    }

    &.mag-button-circle {
      width: $button-md-height;
    }
  }

  &.mag-button-xl {
    height: $button-xl-height;
    padding: $button-xl-padding-vertical $button-xl-padding-horizontal;

    &.mag-button-square {
      border-radius: $button-xl-radius;
    }

    &.mag-button-circle {
      width: $button-xl-height;
    }
  }

  &.mag-button-circle {
    border-radius: 100%;
  }
}
</style>
