<template>
  <div class="mag-grid">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MGrid',
  props: {
    gutter: {
      type: [Number, String],
      default: null,
    },
  },
})
</script>

<style lang="scss" scoped>

@import '@magenta-ui/styles/scss/variables.scss';

.mag-grid {
  display: grid;
  grid-template-columns: repeat($grid-size-columns, 1fr);
  grid-template-rows: 1fr;
  column-gap: $grid-column-gap;
  // @media only screen and (max-width: 768px) {
  //   grid-template-columns: repeat(1, 1fr) !important;
  // }
}
</style>
