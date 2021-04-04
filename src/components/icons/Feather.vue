<template>
  <i class="mag-icon" v-html="svg" />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import feather from 'feather-icons'

export default defineComponent({
  name: 'MFeather',
  props: {
    icon: {
      type: String,
      default: 'archive',
    },
  },
  setup: (props) => {
    const { icon } = props
    const featherIcon = feather.icons[icon]
    const svg = computed(() => {
      const options = { width: '1em', height: '1em' }
      return featherIcon.toSvg(options)
    })

    return { svg }
  },
})
</script>

<style lang="scss" scoped>

@import '../../assets/scss/variables.scss';

.mag-icon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}
</style>
