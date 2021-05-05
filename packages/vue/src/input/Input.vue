<template>
  <div :class="computedClasses">
    <label
      v-if="label || $slots.label"
      :style="computedLabelStyles"
      class="mag-input-label"
    >
      <slot name="label">
        {{ label }}
      </slot>
    </label>
    <div class="mag-input-wrapper">
      <span
        v-if="icon || iconLeft || $slots.icon || $slots['icon-left']"
        class="mag-input-icon-left"
      >
        <slot name="icon-left">
          <Icon
            v-if="icon || iconLeft"
            :icon="icon || iconLeft"
          />
        </slot>
      </span>
      <span
        v-if="iconRight || $slots['icon-right']"
        class="mag-input-icon-right"
      >
        <slot name="icon-right">
          <Icon
            v-if="iconRight"
            :icon="iconRight"
          />
        </slot>
      </span>
      <input
        :value="modelValue"
        :placeholder="placeholder"
        :type="type"
        :disabled="disabled"
        class="mag-input-component"
        @input="handleInput"
      >
      <div
        v-if="description || $slots.description"
        class="mag-input-description"
      >
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { Alignments, Sizes, Status } from '@magenta-ui/types/Input'
import Icon from '../icon/Feather.vue'

export default defineComponent({
  name: 'MInput',
  components: {
    Icon,
  },
  props: {
    modelValue: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    icon: {
      type: String,
      default: null,
    },
    iconLeft: {
      type: String,
      default: null,
    },
    iconRight: {
      type: String,
      default: null,
    },
    size: {
      type: String as PropType<Sizes>,
      default: Sizes.Default,
      validator: (value: string) => (Object.values(Sizes) as string[]).includes(value),
    },
    status: {
      type: String as PropType<Status>,
      default: null,
      validator: (value: string) => (Object.values(Status) as string[]).includes(value),
    },
    placeholder: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    password: {
      type: Boolean,
      default: false,
    },
    alignment: {
      type: String as PropType<Alignments>,
      default: Alignments.Default,
      validator: (value: string) => (Object.values(Alignments) as string[]).includes(value),
    },
    labelWidth: {
      type: [Number, String],
      default: '200px',
    },
  },
  emits: ['change', 'update:modelValue'],
  setup: (props, { emit }) => {

    const handleInput = (event: Event) => {
      const element = event.target as HTMLInputElement
      emit('change', element.value)
      emit('update:modelValue', element.value)
    }

    const type = computed(() => {
      const { password } = props
      return password ? 'password' : 'text'
    })

    const computedClasses = computed(() => {
      const { disabled, size, status, icon, iconLeft, iconRight, alignment } = props
      
      return [
        'mag-input', 
        {
          'mag-input-vertical': alignment === Alignments.Vertical,
          'mag-input-horizontal': alignment === Alignments.Horizontal,
          'mag-input-sm': size === Sizes.Small,
          'mag-input-md': size === Sizes.Medium,
          'mag-input-lg': size === Sizes.Large,
          'mag-input-with-icon-left': icon || iconLeft,
          'mag-input-with-icon-right': iconRight,
          'mag-input-disabled': disabled,
          'mag-input-error': status === Status.Error,
          'mag-input-warning': status === Status.Warning,
          'mag-input-success': status === Status.Success,
        },
      ]
    })

    const computedLabelStyles = computed(() => {
      const { alignment, labelWidth } = props
      let styles = null

      if (alignment === Alignments.Horizontal) {
        const width = typeof labelWidth === 'number' ? `${labelWidth}px` : labelWidth
        styles = { flex: `0 0 ${width}` }
      }

      return styles
    })

    return { computedClasses, computedLabelStyles, handleInput, type }
  },
})
</script>

<style lang="scss" scoped>

@import '@magenta-ui/styles/scss/variables.scss';

.mag-input {
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  width: 100%;

  &.mag-input-vertical {
    flex-direction: column;
  }

  &.mag-input-horizontal {
    flex-direction: row;
    align-items: flex-start;

    &.mag-input-sm {
      .mag-input-label {
        margin: $input-sm-height / 2 $spacing-xs 0 0;
      }
    }

    &.mag-input-md {
      .mag-input-label {
        margin: $input-md-height / 2 $spacing-xs 0 0;
      }
    }

    &.mag-input-lg {
      .mag-input-label {
        margin: $input-lg-height / 2 $spacing-xs 0 0;
      }
    }

    .mag-input-label {
      transform: translateY(-50%);
    }
  }

  &.mag-input-sm { 
    .mag-input-wrapper {
      .mag-input-component {
        height: $input-sm-height;
        line-height: $input-sm-height;
        padding: $input-sm-padding-vertical $button-sm-padding-horizontal;
        border-radius: $input-sm-radius;
        font-size: $input-sm-font-size;
      }
    }
  }

  &.mag-input-md {
    .mag-input-wrapper {
      .mag-input-component {
        height: $input-md-height;
        line-height: $input-md-height;
        padding: $input-md-padding-vertical $input-md-padding-horizontal;
        border-radius: $input-md-radius;
        font-size: $font-size-base;
      }
    }
  }

  &.mag-input-lg {
    .mag-input-wrapper {
      .mag-input-component {
        height: $input-lg-height;
        line-height: $input-lg-height;
        padding: $input-lg-padding-vertical $input-lg-padding-horizontal;
        border-radius: $input-lg-radius;
        font-size: $input-lg-font-size;
      }
    }
  }

  &.mag-input-with-icon-left {
    &.mag-input-sm {
      .mag-input-icon-left {
        top: $input-sm-height / 2;
        left: $input-sm-padding-horizontal;
      }

      .mag-input-component {
        padding-left: $input-sm-padding-horizontal * 2.5;
      }
    }

    &.mag-input-md {
      .mag-input-icon-left {
        top: $input-md-height / 2;
        left: $input-md-padding-horizontal;
      }

      .mag-input-component {
        padding-left: $input-md-padding-horizontal * 2.5;
      }
    }

    &.mag-input-lg {
      .mag-input-icon-left {
        font-size: $input-lg-font-size;
        top: $input-lg-height / 2;
        left: $input-lg-padding-horizontal;
      }

      .mag-input-component {
        padding-left: $input-lg-padding-horizontal * 2.5;
      }
    }
  }

  &.mag-input-with-icon-right {
    &.mag-input-sm {
      .mag-input-icon-right {
        top: $input-sm-height / 2;
        right: $input-sm-padding-horizontal;
      }

      .mag-input-component {
        padding-right: $input-sm-padding-horizontal * 2.5;
      }
    }

    &.mag-input-md {
      .mag-input-icon-right {
        top: $input-md-height / 2;
        right: $input-md-padding-horizontal;
      }

      .mag-input-component {
        padding-right: $input-md-padding-horizontal * 2.5;
      }
    }

    &.mag-input-lg {
      .mag-input-icon-right {
        top: $input-lg-height / 2;
        right: $input-lg-padding-horizontal;
      }

      .mag-input-component {
        padding-right: $input-lg-padding-horizontal * 2.5;
      }
    }
  }

  &.mag-input-disabled {
    .mag-input-component {
      cursor: no-drop;
      background: $input-disabled-bg;
      color: $input-disabled-font-color;
    }
    
    .mag-input-icon-left, .mag-input-icon-right {
      cursor: no-drop;
      color: $input-disabled-font-color;
    }
  }

  &.mag-input-error {
    .mag-input-component {
      border-color: $danger-color !important;
      box-shadow: $input-error-shadow !important;
    }
    
    .mag-input-description {
      color: $danger-color;
    }
  }

  &.mag-input-success {
    .mag-input-component {
      border-color: $success-color !important; 
      box-shadow: $input-success-shadow !important;
    }
    
    .mag-input-description {
      color: $success-color;
    }
  }

  &.mag-input-warning {
    .mag-input-component {
      border-color: $warning-color !important;
      box-shadow: $input-warning-shadow !important;
    }
    
    .mag-input-description {
      color: $warning-color;
    }
  }

  .mag-input-label {
    flex-grow: 1;
    color: $input-label-font-color;
    font-size: $input-label-font-size;
    font-weight: $input-label-font-weight;
    margin-bottom: $spacing-xs;
  }

  .mag-input-description {
    flex-grow: 1;
    color: $font-color-muted;
    font-size: $font-size-base * .8;
    margin-top: 1px;
  }

  .mag-input-wrapper {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    position: relative;

    .mag-input-component {
      flex-grow: 1;
      outline: none;
      height: $input-base-height;
      border: 1px solid $input-border-color;
      border-radius: $input-base-radius;
      color: $input-font-color;
      font-family: $font-family-base;
      font-size: $font-size-base;
      transition: $input-transition;

      &::placeholder {
        color: $input-placeholder-color;
      }

      &:focus {
        box-shadow: $input-focus-shadow;
        border-color: $primary-color;
      }

      &:active {
        box-shadow: $input-active-shadow;
      }
    }
    
    .mag-input-icon-left, .mag-input-icon-right {
      color: $input-icon-color;
      position: absolute;
      transform: translateY(-50%);
    }
  }
}
</style>
