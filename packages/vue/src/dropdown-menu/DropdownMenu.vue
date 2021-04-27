<template>
  <div class="mag-dropdown-menu">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MDropdownMenu',
})
</script>

<style lang="scss" scoped>

@import '@magenta-ui/styles/scss/variables.scss';

.mag-dropdown-menu {
  z-index: $dropdown-z-index;
  position: absolute;
  margin-top: 4px;
  opacity: 0;
  visibility: hidden;
  overflow: hidden;
  min-width: $dropdown-min-width;
  background: $dropdown-bg;
  border: $dropdown-border;
  transition: $dropdown-transition;
  border-radius: $dropdown-radius;
  box-shadow: $dropdown-shadow;
}
</style>
