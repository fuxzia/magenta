<template>
  <i
    v-if="svg"
    class="mag-icon"
    v-html="svg"
  />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import feather from 'feather-icons'

export default defineComponent({
  name: 'MFeather',
  props: {
    icon: {
      type: String,
      default: 'box',
    },
  },
  setup: (props) => {
    const svg = computed(() => {
      const { icon } = props
      if (!feather.icons[icon]) {
        return null
      }
      
      const featherIcon = feather.icons[icon]
      const options = { width: '1em', height: '1em' }
      return featherIcon.toSvg(options)
    })

    return { svg }
  },
})
</script>

<style lang="scss" scoped>
.mag-icon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  vertical-align: -.125em;
}
</style>
