<template>
  <div :class="computedClasses">
    <Icon
      v-if="hasCustomIcons"
      :icon="checked ? customIcons.checked : customIcons.default"
    />
    <div
      v-else
      class="mag-checkbox-marker-default"
    >
      <Icon icon="square" />
      <Icon
        v-if="checked"
        icon="check"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { CheckboxCustomIcons } from '@magenta-ui/types'
import Icon from '../icon/Feather.vue'

export default defineComponent({
  name: 'MCheckboxMarker',
  components: {
    Icon,
  },
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    customIcons: {
      type: Object as PropType<CheckboxCustomIcons>,
      default: null,
    },
  },
  setup: (props) => {

    const hasCustomIcons = computed(() => {
      const { customIcons } = props

      return customIcons && customIcons.default && customIcons.checked
    })

    const computedClasses = computed(() => {
      const { checked } = props

      return [
        'mag-checkbox-marker',
        {
          'mag-checkbox-marker-checked': checked,
        },
      ]
    })

    return { hasCustomIcons, computedClasses }
  },
})
</script>

<style lang="scss" scoped>
@import '@magenta-ui/styles/scss/variables.scss';

.mag-checkbox-marker {
  cursor: pointer;
  transition: $checkbox-transition;
  line-height: 1;

  &:hover {
    color: $checkbox-hover-color;
  }

  &.mag-checkbox-marker-checked {
    color: $checkbox-checked-color;

    .mag-checkbox-marker-default {
      position: relative;
      
      :deep(.mag-icon) {
        
        &:first-child {
          svg {
            fill: currentColor;
          }
        }

        &:last-child {
          position: absolute;
          top: 0%;
          left: 0%;
          transform: translate(25%, 25%);
          font-size: 70%;
          color: $white;
        }
      }
    }
  }
}
</style>
