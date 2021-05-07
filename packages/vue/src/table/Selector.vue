<template>
  <div :class="computedClasses">
    <Icon icon="square" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import Icon from '../icon/Feather.vue'

export default defineComponent({
  name: 'MTableSelector',
  components: {
    Icon,
  },
  props: {
    // 
  },
  setup: () => {
    const computedClasses = computed(() => {
      return [
        'mag-table-selector',
      ]
    })

    return { computedClasses }
  },
})
</script>

<style lang="scss" scoped>

@import '@magenta-ui/styles/scss/variables.scss';

.mag-table-selector {
  transition: $table-transition;
  cursor: pointer;
  font-size: $font-size-lg;
  
  &:hover {
    color: $primary-color;
  }
}
</style>
