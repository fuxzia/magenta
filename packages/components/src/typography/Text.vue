<template>
  <component :is="tag" :class="computedClasses">
    <template v-if="$slots.default || content">
      <slot v-if="$slots.default"/>
      <template v-else-if="content">
        {{ content }}
      </template>
    </template>
    <Spacer v-if="spacerAfter" :size="spacerAfter" />
  </component>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { Sizes, Tags } from '@magenta-ui/types/Text'
import { Sizes as SpacerSizes } from '@magenta-ui/types/Spacer'
import Spacer from '../spacers/Spacer.vue'

export default defineComponent({
  name: 'MText',
  components: {
    Spacer
  },
  props: {
    tag: {
      type: String as PropType<Tags>,
      default: Tags.Default,
      validator: (value: string) => (Object.values(Tags) as string[]).includes(value),
    },
    size: {
      type: String as PropType<Sizes>,
      default: Sizes.Default,
      validator: (value: string) => (Object.values(Sizes) as string[]).includes(value),
    },
    content: {
      type: String,
      default: null,
    },
    muted: {
      type: Boolean,
      default: false,
    },
    nowrap: {
      type: Boolean,
      default: false,
    },
    bold: {
      type: Boolean,
      default: false,
    },
    italic: {
      type: Boolean,
      default: false,
    },
    danger: {
      type: Boolean,
      default: false,
    },
    success: {
      type: Boolean,
      default: false,
    },
    ellipsis: {
      type: Boolean,
      default: false,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    code: {
      type: Boolean,
      default: false,
    },
    maxLines: {
      type: Number,
      default: null,
    },
    spacerAfter: {
      type: [Boolean, String],
      default: SpacerSizes.Default,
      validator: (value: string) => (Object.values(SpacerSizes) as string[]).includes(value) || typeof value === 'boolean',
    }
  },
  setup: (props) => {
    const { size, code, bold, muted, danger, ellipsis, primary, success, maxLines, italic, nowrap } = props
    const computedClasses = computed(() => {
      return [
        'mag-text',
        {
          'mag-text-sm': size === Sizes.Small,
          'mag-text-md': ([Sizes.Medium, Sizes.Default] as string[]).includes(size),
          'mag-text-lg': size === Sizes.Large,
          'mag-text-2lg': size === Sizes.LargeX2,
          'mag-text-bold': bold,
          'mag-text-code': code,
          'mag-text-muted': muted,
          'mag-text-italic': italic,
          'mag-text-nowrap': nowrap,
          'mag-text-danger': danger,
          'mag-text-success': success,
          'mag-text-primary': primary,
          'mag-text-ellipsis': ellipsis,
          [`mag-text-max-lines-${maxLines}`]: maxLines,
        }
      ]
    })

    return { computedClasses }
  }
})
</script>

<style lang="scss" scoped>

@import '@magenta-ui/styles/scss/variables.scss';

.mag-text {
  color: $font-color-base;
  font-family: $font-family-base;
  line-height: $line-height-base;

  &.mag-text-sm {
    font-size: $font-size-sm;

    &.mag-text-code {
      font-size: $font-size-sm * $font-size-code-percentage;
    }
  }

  &.mag-text-md {
    font-size: $font-size-md;

    &.mag-text-code {
      font-size: $font-size-md * $font-size-code-percentage;
    }
  }

  &.mag-text-lg {
    font-size: $font-size-lg;

    &.mag-text-code {
      font-size: $font-size-lg * $font-size-code-percentage;
    }
  }

  &.mag-text-2lg {
    font-size: $font-size-lg + 2;
  }

  &.mag-text-bold {
    font-weight: $font-weight-bold;
  }

  &.mag-text-code {
    color: $font-color-code;
    font-family: $font-family-mono;
  }

  &.mag-text-muted {
    color: $font-color-muted;
  }

  &.mag-text-italic {
    font-style: italic;
  }

  &.mag-text-danger {
    color: $font-color-danger;
  }

  &.mag-text-success {
    color: $font-color-success;
  }

  &.mag-text-primary {
    color: $font-color-primary;
  }

  &.mag-text-nowrap {
    white-space: nowrap;
  }

  &.mag-text-ellipsis {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  $i: 1;
  @while $i <= 100 {
    &.mag-text-max-lines-#{$i} {
      display: -webkit-box;
      -webkit-line-clamp: $i;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    $i: $i + 1;
  }
}

</style>
