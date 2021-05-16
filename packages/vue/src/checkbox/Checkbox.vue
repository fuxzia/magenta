<template>
  <div :class="computedClasses">
    <Label
      :slots="$slots"
      :label="label"
      :label-width="labelWidth"
      :alignment="alignment"
    >
      <template #label>
        <slot name="label" />
      </template>
    </Label>
    <div
      class="mag-checkbox-wrapper"
      @click="toggle"
    >
      <input
        :value="checkboxValue"
        :checked="checkboxValue"
        type="checkbox"
        class="mag-checkbox-input"
        hidden
        @input="handleInput"
      >
      <Marker
        :size="size"
        :checked="checkboxValue"
        :custom-icons="customIcons"
      />
      <div
        v-if="$slots.default"
        class="mag-checkbox-content"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs, ref, watch } from 'vue'
import { CheckboxCustomIcons, InputAlignments, InputSizes, InputStatus } from '@magenta-ui/types'
import Label from '../input/Label.vue'
import Marker from './Marker.vue'

export default defineComponent({
  name: 'MCheckbox',
  components: {
    Label,
    Marker,
  },
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: null,
    },
    labelWidth: {
      type: [Number, String],
      default: '200px',
    },
    disabled: {
      type: Boolean,
      default: false,
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
    alignment: {
      type: String as PropType<InputAlignments>,
      default: InputAlignments.Default,
      validator: (value: string) => (Object.values(InputAlignments) as string[]).includes(value),
    },
    customIcons: {
      type: Object as PropType<CheckboxCustomIcons>,
      default: null,
    },
  },
  emits: ['change', 'checked', 'update:modelValue'],
  setup: (props, { emit }) => {
    const { modelValue, checked } = toRefs(props)
    const checkboxValue = ref(props.modelValue)

    const toggle = () => {
      if (props.disabled) {
        return
      }

      checkboxValue.value = !checkboxValue.value

      emit('change', checkboxValue.value)
      emit('checked', checkboxValue.value)
      emit('update:modelValue', checkboxValue.value)
    }
    
    const computedClasses = computed(() => {
      const { disabled, size, status, alignment } = props
      
      return [
        'mag-checkbox', 
        {
          'mag-checkbox-vertical': alignment === InputAlignments.Vertical,
          'mag-checkbox-horizontal': alignment === InputAlignments.Horizontal,
          'mag-checkbox-sm': size === InputSizes.Small,
          'mag-checkbox-md': size === InputSizes.Medium,
          'mag-checkbox-lg': size === InputSizes.Large,
          'mag-checkbox-disabled': disabled,
          'mag-checkbox-error': status === InputStatus.Error,
          'mag-checkbox-warning': status === InputStatus.Warning,
          'mag-checkbox-success': status === InputStatus.Success,
          'mag-checkbox-checked': checkboxValue.value,
        },
      ]
    })

    watch(modelValue, (value) => {
      checkboxValue.value = value
    })

    watch(checked, (value) => {
      checkboxValue.value = value
    })

    return { checkboxValue, computedClasses, toggle }
  },
})
</script>

<style lang="scss" scoped>

@import '@magenta-ui/styles/scss/variables.scss';

.mag-checkbox {
  margin-bottom: $checkbox-space-after;

  &.mag-checkbox-sm {
    .mag-checkbox-marker {
      font-size: $checkbox-sm-size;
    }
    .mag-checkbox-content {
      font-size: $font-size-sm;
      top: -2px;
    }
  }

  &.mag-checkbox-md {
    .mag-checkbox-marker {
      font-size: $checkbox-md-size;
    }
    .mag-checkbox-content {
      font-size: $font-size-base;
      top: -1px;
    }
  }

  &.mag-checkbox-lg {
    .mag-checkbox-marker {
      font-size: $checkbox-lg-size;
    }
    .mag-checkbox-content {
      font-size: $font-size-lg;
      top: 0;
    }
  }

  &.mag-checkbox-disabled {
    .mag-checkbox-marker,
    .mag-checkbox-content {
      cursor: no-drop !important;
      color: $checkbox-disabled-color !important;
    }
  }

  .mag-checkbox-wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    transition: $checkbox-transition;

    .mag-checkbox-content {
      position: relative;
      flex: 1;
      margin-left: $spacing-sm;
      cursor: default;

      svg {
        fill: white;
      }
    }

    &:hover {  
      .mag-checkbox-marker {
        color: $checkbox-hover-color;
      }
    }
  }
}
</style>
