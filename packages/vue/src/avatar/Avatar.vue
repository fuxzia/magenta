<template>
  <div :class="computedClasses">
    <Icon
      v-if="icon && !$slots.default"
      :icon="icon"
      :size="size"
    />
    <img :src="image">
    <span :class="computedBadgeClasses">
      {{ badgeNumber }}
    </span>
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { AvatarSizes, AvatarBadgeTypes } from '@magenta-ui/types'
import Icon from '../icon/Feather.vue'

export default defineComponent({
  name: 'MAvatar',
  components: {
    Icon,
  },
  props: {
    size: {
      type: String as PropType<AvatarSizes>,
      default: AvatarSizes.Default,
      validator: (value: string) => (Object.values(AvatarSizes) as string[]).includes(value),
    },
    icon: {
      type: String,
      default: 'user',
    },
    image: {
      type: String,
      default: null,
    },
    square: {
      type: Boolean,
      default: false,
    },
    badge: {
      type: String as PropType<AvatarBadgeTypes>,
      default: null,
      validator: (value: string) => (Object.values(AvatarBadgeTypes) as string[]).includes(value),
    },
    badgeNumber: {
      type: Number,
      default: null,
    },
  },
  setup: (props) => {
    const computedBadgeClasses = computed(() => {
      const { badge } = props

      return [
        'mag-avatar-badge', {
          [`mag-avatar-badge-${badge}`]: badge,
        },
      ]
    })

    const computedClasses = computed(() => {
      const { size, image, square, icon, badge, badgeNumber } = props

      return [
        'mag-avatar', 
        {
          'mag-avatar-square': square,
          'mag-avatar-with-icon': icon,
          'mag-avatar-with-image': image,
          'mag-avatar-with-badge': badge,
          'mag-avatar-with-badge-number': typeof badgeNumber === 'number',
          'mag-avatar-md': size === AvatarSizes.Medium,
          'mag-avatar-sm': size === AvatarSizes.Small,
          'mag-avatar-lg': size === AvatarSizes.Large,
          'mag-avatar-xlg': size === AvatarSizes.XLarge,
          'mag-avatar-xxlg': size === AvatarSizes.XXLarge,
        },
      ]
    })

    return { computedClasses, computedBadgeClasses }
  },
})
</script>

<style lang="scss" scoped>

@import '@magenta-ui/styles/scss/variables.scss';

.mag-avatar {
  position: relative;
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  line-height: 1;
  background-color: $avatar-bg;
  color: $avatar-font-color;
  border-radius: 100%;

  @each $spacing, $value in $spacings {
    &.mag-avatar-#{$spacing} {
      height: $value * 2;
      width: $value * 2;
      font-size: $value;

      > .mag-avatar-badge {
        height: $value / 1.5;
        width: $value / 1.5;
      }

      &.mag-avatar-with-badge-number {
        > .mag-avatar-badge {
          height: $value / 1.2;
          width: $value / 1.2;
          font-size: $value / 3;
          font-weight: $avatar-badge-font-weight;
        }
      }
    }
  }

  &.mag-avatar-square {
    border-radius: $avatar-square-radius;

    > .mag-avatar-badge {
      transform: translate(40%, -40%);
    }

    &.mag-avatar-with-badge-number {
      > .mag-avatar-badge {
        transform: translate(40%, -40%);
      }
    }
  }

  &.mag-avatar-with-image {
    > .mag-icon {
      display: none;
    }

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 100%;
    }

    &.mag-avatar-square {
      > img {
        border-radius: $avatar-square-radius;
      }
    }
  }

  &.mag-avatar-with-badge {
    > .mag-avatar-badge {
      display: flex;
    }
  }

  &.mag-avatar-with-badge-number {
    > .mag-avatar-badge {
      transform: translate(27%, -25%);
    }
  }

  > .mag-avatar-badge {
    z-index: 1;
    display: none;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(10%, -10%);
    background: $black;
    border: 2px solid $white;
    border-radius: 100%;

    &-gray {
      color: $font-color-base;
      background: $avatar-badge-bg-gray;
    }
    &-green {
      background: $avatar-badge-bg-green;
    }
    &-red {
      background: $avatar-badge-bg-red;
    }
  }
}
</style>
