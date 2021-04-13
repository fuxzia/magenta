<template>
  <div :class="computedClasses">
    <Icon
      v-if="icon"
      :icon="icon"
    />
    <span v-if="$slots.default || label">
      <slot v-if="$slots.default" />
      <template v-else-if="label">
        {{ label }}
      </template>
    </span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import Icon from '../icon/Feather.vue'

export default defineComponent({
  name: 'MDropdownItem',
  components: {
    Icon,
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
    separator: {
      type: Boolean,
      default: false,
    },
    header: {
      type: Boolean,
      default: false,
    },
  },
  setup: (props) => {
    const computedClasses = computed(() => {
      const { header, separator } = props

      return [
        'mag-dropdown-item', 
        {
          'mag-dropdown-item-header': header,
          'mag-dropdown-item-separator': separator,
        },
      ]
    })

    return { computedClasses }
  },
})
</script>

<style lang="scss" scoped>

@import '@magenta-ui/styles/scss/variables.scss';

.mag-dropdown-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: $dropdown-item-transition;
  min-height: $dropdown-item-height;
  padding: $dropdown-item-padding-vertical $dropdown-item-padding-horizontal;
  background: $dropdown-item-bg;
  color: $dropdown-item-font-color;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background: $dropdown-item-hover-bg;
  }

  &.mag-dropdown-item-header {
    cursor: default;
    padding: $spacing-xs $dropdown-item-padding-horizontal;

    &:hover {
      background: $dropdown-item-bg;
    }
  }

  &.mag-dropdown-item-separator {
    min-height: 0;
    height: 0;
    margin: 0;
    padding: 0;
    border-bottom: 1px solid $dropdown-item-separator-color;
  }

  > .mag-icon {
    flex: 0 0 1em;
    margin-right: $spacing-xs + 4;
    color: $dropdown-item-icon-color;
  }
}
</style>
