<template>
  <div :class="computedClasses">
    <div class="mag-input__wrapper">
      <Label
        :slots="$slots"
        :label="label"
        class="mag-input__label"
      >
        <template #label>
          <slot name="label" />
        </template>
      </Label>
      <Icon
        v-if="icon || iconLeft"
        :icon="icon || iconLeft"
        class="mag-input__icon-left"
      >
        <template #icon-left>
          <slot name="icon-left" />
        </template>
      </Icon>
      <Icon
        v-if="iconRight"
        :icon="iconRight"
        class="mag-input__icon-right"
      >
        <template #icon-right>
          <slot name="icon-right" />
        </template>
      </Icon>
      <input
        :value="modelValue"
        :placeholder="computedPlaceholder"
        :type="type"
        :disabled="disabled"
        class="mag-input__component"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
      >
    </div>
    <div
      v-if="description || $slots.description"
      class="mag-input__description"
    >
      {{ description }}
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue'
import { InputAlignments, InputSizes, InputStatus, InputTypes } from '@magenta-ui/types'
import Icon from '../icon/Feather.vue'
import Label from './Label.vue'

export default defineComponent({
  name: 'MInput',
  components: {
    Icon,
    Label,
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
    type: {
      type: String as PropType<InputTypes>,
      default: InputTypes.Default,
      validator: (value: string) => (Object.values(InputTypes) as string[]).includes(value),
    },
    size: {
      type: String as PropType<InputSizes>,
      default: InputSizes.Default,
      validator: (value: string) => (Object.values(InputSizes) as string[]).includes(value),
    },
    status: {
      type: String as PropType<InputStatus>,
      default: null,
      validator: (value: string) => (Object.values(InputStatus) as string[]).includes(value),
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
      type: String as PropType<InputAlignments>,
      default: InputAlignments.Default,
      validator: (value: string) => (Object.values(InputAlignments) as string[]).includes(value),
    },
  },
  emits: ['change', 'update:modelValue'],
  setup: (props, { emit }) => {
    const isFocus = ref(false)

    const handleInput = (event: Event) => {
      const element = event.target as HTMLInputElement
      const value = element.value || null

      emit('change', value)
      emit('update:modelValue', value)
    }

    const handleFocus = () => {
      isFocus.value = true
    }

    const handleBlur = () => {
      isFocus.value = false
    }

    const computedIsActive = computed(() => {
      const { modelValue } = props

      return isFocus.value || modelValue
    })

    const computedPlaceholder = computed(() => {
      const { placeholder, label, modelValue } = props

      if (!modelValue && !label) {
        return placeholder
      }

      return !computedIsActive.value ? null : placeholder
    })

    const computedClasses = computed(() => {
      const { disabled, size, status, icon, iconLeft, iconRight } = props
      
      return [
        'mag-input', 
        {
          'mag-input--sm': size === InputSizes.Small,
          'mag-input--md': size === InputSizes.Medium,
          'mag-input--lg': size === InputSizes.Large,
          'mag-input--active': computedIsActive.value,
          'mag-input--disabled': disabled,
          'mag-input--error': status === InputStatus.Error,
          'mag-input--warning': status === InputStatus.Warning,
          'mag-input--success': status === InputStatus.Success,
          'mag-input--with-icon-left': icon || iconLeft,
          'mag-input--with-icon-right': iconRight,
        },
      ]
    })

    return { computedClasses, computedPlaceholder, handleInput, handleBlur, handleFocus }
  },
})
</script>

<style lang="scss" scoped>

@import '@magenta-ui/styles/scss/variables.scss';

.mag-input {
  display: block;
  align-items: stretch;
  justify-content: flex-start;
  width: 100%;

  $input-colors: (
    error: (
      color: $danger-color,
      shadow: $input-error-shadow,
    ),
    warning: (
      color: $warning-color,
      shadow: $input-warning-shadow,
    ),
    success: (
      color: $success-color,
      shadow: $input-success-shadow,
    ),
  );

  $input-sizes: (
    sm: (
      height: $input-sm-height,
      font-size: $input-sm-font-size,
      padding-horizontal: $input-sm-padding-horizontal,
    ),
    md: (
      height: $input-md-height,
      font-size: $font-size-base,
      padding-horizontal: $input-md-padding-horizontal,
    ),
    lg: (
      height: $input-lg-height,
      font-size: $input-lg-font-size,
      padding-horizontal: $input-lg-padding-horizontal,
    )
  );

  @each $size, $configs in $input-sizes {
    &--#{$size} {
      .mag-input__label {
        left: map-get($configs, 'padding-horizontal');
      }

      .mag-input__icon-left {
        left: map-get($configs, 'padding-horizontal');
      }

      .mag-input__component {
        height: map-get($configs, 'height');
        padding-left: map-get($configs, 'padding-horizontal');
        font-size: map-get($configs, 'font-size');
        line-height: map-get($configs, 'height');
      }
      
      &.mag-input--with-icon-left {

        &.mag-input--active {
          .mag-input__label {
            left: map-get($configs, 'padding-horizontal');
          }
        }

        .mag-input__label {
          left: map-get($configs, 'padding-horizontal') * 2.5;
        }

        .mag-input__icon-left {
          left: map-get($configs, 'padding-horizontal');
        }

        .mag-input__component {
          padding-left: map-get($configs, 'padding-horizontal') * 2.5;
        }
      }

      &.mag-input--with-icon-right {
        .mag-input__component {
          padding-right: map-get($configs, 'padding-horizontal') * 2.5;
        }
      }
    }
  }

  @each $color, $configs in $input-colors {
    &--#{$color} {
      .mag-input__component {
        border-color: map-get($configs, 'color') !important; 
        box-shadow: map-get($configs, 'shadow') !important;
      }
      
      .mag-input__description {
        color: map-get($configs, 'color');
      }
    }
  }

  &--active {
    .mag-input__label {
      top: 0;
      font-size: $input-label-font-size-active;
    }
  }

  &---disabled {
    .mag-input__component {
      cursor: no-drop;
      background: $input-disabled-bg;
      color: $input-disabled-font-color;
    }
  }

  &__wrapper {
    position: relative;
    display: flex;
    width: 100%;
  }

  &__icon {
    &-left,
    &-right {
      color: $input-icon-color;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  &__label {
    position: absolute;
    cursor: text;
    top: 50%;
    padding: 0 4px;
    margin: 0 -4px;
    transform: translateY(-50%);
    transition: $input-transition;
    background: $input-base-bg;
    color: $input-label-font-color;
    font-size: $input-label-font-size;
    font-weight: $input-label-font-weight;
  }

  &__component {
    flex-grow: 1;
    outline: none;
    height: $input-base-height;
    border: 1px solid $input-border-color;
    border-radius: $input-base-radius;
    background: $input-base-bg;
    color: $input-font-color;
    font-family: $font-family-base;
    font-size: $font-size-base;
    transition: $input-transition;

    &::placeholder {
      color: $input-placeholder-color;
      transition: $input-transition;
    }

    &:focus {
      box-shadow: $input-focus-shadow;
      border-color: $primary-color;
    }

    &:active {
      box-shadow: $input-active-shadow;
    }
  }

  &__description {
    flex-grow: 1;
    color: $font-color-muted;
    font-size: $font-size-base * .8;
    margin-top: 1px;
  }
}
</style>
