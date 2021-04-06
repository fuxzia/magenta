<template>
  <button :class="computedClasses">
    <Spinner v-if="loading" />
    <Icon v-if="icon && !loading" :icon="icon" />
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
import { Sizes } from '@magenta-ui/types/Button'
import Icon from '../icons/Feather.vue'
import Spinner from '../loaders/Spinner.vue'

export default defineComponent({
  name: 'MButton',
  components: {
    Icon,
    Spinner,
  },
  props: {
    label: {
      type: String,
      default: null,
    },
    icon: {
      type: String,
      default: null,
    },
    size: {
      type: String as PropType<Sizes>,
      default: Sizes.Default,
      validator: (value: string) => (Object.values(Sizes) as string[]).includes(value),
    },
    loading: {
      type: Boolean,
      default: false,
    },
    outline: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    secondary: {
      type: Boolean,
      default: false,
    },
    danger: {
      type: Boolean,
      default: false,
    },
  },
  setup: (props) => {
    const { label, rounded, circle, outline, loading, size, secondary, danger } = props
    const computedClasses = computed(() => {
      return [
        'mag-button', 
        {
          'mag-button-primary': !secondary && !danger,
          'mag-button-secondary': secondary,
          'mag-button-danger': danger,
          'mag-button-circle': circle,
          'mag-button-rounded': rounded,
          'mag-button-square': !circle && !rounded,
          'mag-button-sm': size === Sizes.Small,
          'mag-button-md': ([Sizes.Medium, Sizes.Default] as string[]).includes(size),
          'mag-button-lg': size === Sizes.Large,
          'mag-button-loading': loading,
          'mag-button-outline': outline,
        }
      ]
    })

    return { computedClasses, label }
  }
})
</script>

<style lang="scss" scoped>

@import '@magenta-ui/styles/scss/variables.scss';

.mag-button {
  line-height: 1;
  position: relative;
  display: inline-block;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  cursor: pointer;
  outline: none;
  border-width: $button-border-size;
  background: $button-bg-primary;
  color: $button-font-color;
  font-weight: $button-font-weight;
  font-family: $font-family-base;
  font-size: $font-size-base;
  transition: $transition-base;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  &:focus {
    box-shadow: 0 0 0 calc(4px) lighten($button-bg-primary, 40%);
  }

  &:active {
    box-shadow: 0 0 0 calc(4px) lighten($button-bg-primary, 40%);
  }

  &:hover {
    background: lighten($button-bg-primary, 5%);
  }

  &:disabled {
    opacity: .6;
    cursor: no-drop;
  }

  &.mag-button-secondary {
    background: lighten($button-bg-primary, 40%);
    color: $button-bg-primary;

    &:hover {
      background: lighten($button-bg-primary, 42%);
    }
  }

  &.mag-button-danger {
    background: $danger-color;

    &:hover {
      background: lighten($danger-color, 5%);
    }

    &:focus {
      box-shadow: 0 0 0 calc(4px) lighten($danger-color, 40%);
    }

    &:active {
      box-shadow: 0 0 0 calc(4px) lighten($danger-color, 40%);
    }
  }

  &.mag-button-outline {
    background: $white !important;
    color: $button-font-color-outline;
    border: 1px solid $border-color-base;

    & .mag-spinner {
      color: $primary-color;
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

    &.mag-button-rounded {
      padding: $button-sm-padding-vertical $button-sm-padding-horizontal * 1.2;
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

    &.mag-button-rounded {
      padding: $button-md-padding-vertical $button-md-padding-horizontal * 1.3;
    }

    > span, > .mag-icon {
      top: -1px;
      position: relative;
    }
  }

  &.mag-button-lg {
    height: $button-lg-height;
    padding: $button-lg-padding-vertical $button-lg-padding-horizontal;

    &.mag-button-square {
      border-radius: $button-lg-radius;
    }

    &.mag-button-circle {
      width: $button-lg-height;
    }

    &.mag-button-rounded {
      padding: $button-lg-padding-vertical $button-lg-padding-horizontal * 1.2;
    }

    > span, > .mag-icon {
      top: -1px;
      position: relative;
    }
  }

  &.mag-button-circle {
    border-radius: 100%;
    padding: 0;
  }

  &.mag-button-rounded {
    border-radius: 100px;
  }

  & > .mag-spinner {
    line-height: 0;
    position: relative;
    display: inline-flex;
    align-items: center;
    color: $button-font-color;
    
    + span {
      margin-left: $spacing-xs;
    }
  }

  & > .mag-icon {
    line-height: 0;
    display: inline-flex;
    align-items: center;

    + span {
      margin-left: $spacing-xs;
    }
  }

  & > span {
    display: inline-flex;
    align-items: center;
  }
}
</style>
