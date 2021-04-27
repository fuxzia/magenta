<template>
  <div class="mag-button-group">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MButtonGroup',
})
</script>

<style lang="scss" scoped>

@import '@magenta-ui/styles/scss/variables.scss';

.mag-button-group {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;

  &:deep(.mag-button) {

    &:active, &:focus {
      z-index: 2;
    }
    
    &:first-child {
      border-top-right-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
    }

    &:last-child {
      border-top-left-radius: 0 !important;
      border-bottom-left-radius: 0 !important;
      border-left: 1px solid rgba($white, .5);

      &.mag-button-outline {
        border-left: 1px solid $button-outline-border-color !important;
      }
    }

    &:not(:first-child) {
      margin-left: -1px;
      border-left: 1px solid rgba($white, .5);
    }

    &:not(:first-child, :last-child) {
      border-radius: 0 !important;
      border-left: 1px solid rgba($white, .5);
      border-right: 1px solid rgba($white, .5);

      &.mag-button-outline {
        border-left: 1px solid $button-outline-border-color !important;
        border-right: 1px solid $button-outline-border-color !important;
      }
    }
  }
}
</style>
