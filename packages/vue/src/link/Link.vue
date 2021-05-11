<template>
  <a
    v-if="isExternalLink"
    v-bind="$attrs"
    :href="to"
    :target="target"
    class="mag-link"
  >
    <slot />
  </a>
  <router-link
    v-else
    v-slot="{ href, navigate }"
    v-bind="$props"
    custom
  >
    <a
      v-bind="$attrs"
      :href="href"
      :class="computedClasses"
      @click="navigate"
    >
      <slot />
    </a>
  </router-link>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { RouterLink, useLink } from 'vue-router'

export default defineComponent({
  name: 'MLink',
  props: {
    ...RouterLink.props,
    to: {
      type: String,
      default: '#',
    },
    target: {
      type: String,
      default: null,
    },
    activeClass: {
      type: String,
      default: 'mag-link-active',
    },
    exactActiveClass: {
      type: String,
      default: 'mag-link-exact-active',
    },
    inactiveClass: {
      type: String,
      default: '',
    },
  },
  setup: (props) => {
    const { isActive, isExactActive } = useLink(props)
    
    const isExternalLink = computed(() => {
      return typeof props.to === 'string' && props.to.startsWith('http')
    })

    const computedClasses = computed(() => {
      return [
        'mag-link',
        {
          [props.activeClass]: isActive.value,
          [props.exactActiveClass]: isExactActive.value,
          [props.inactiveClass]: !isActive.value && props.inactiveClass,
        },
      ]
    })

    return { computedClasses, isExternalLink }
  },
})
</script>

<style lang="scss" scoped>

@import '@magenta-ui/styles/scss/variables.scss';

.mag-link {
  color: $link-font-color;
  font-style: $link-font-style;
  font-weight: $link-font-weight;
  text-decoration: $link-text-decoration;
  transition: $link-transition;

  &:hover {
    color: $link-hover-font-color;
  }
}
</style>
