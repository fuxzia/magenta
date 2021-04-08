<template>
  <div class="mag-avatar-stack">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MAvatarStack',
})
</script>

<style lang="scss" scoped>

@import '@magenta-ui/styles/scss/variables.scss';

.mag-avatar-stack {
  position: relative;
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: flex-start;

  $i: 1;
  @while $i <= 100 {
    :deep(.mag-avatar:nth-child(#{$i})) {
      z-index: 100 - $i;
      border: 2px solid $white;

      @if $i > 1 {
        margin-left: -15px;
      }
    }
    $i: $i + 1;
  }
}
</style>
