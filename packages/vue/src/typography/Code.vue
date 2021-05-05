<template>
  <PrismEditor
    v-model="editorCode"
    class="mag-code"
    :highlight="highlighter"
    :line-numbers="lineNumbers"
    readonly
  />
  <div class="mag-code-content">
    <slot />
  </div>
</template>

<script>
import prism from 'prismjs'
import { computed, defineComponent } from 'vue'
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css'
import 'prismjs/themes/prism-funky.css'

export default defineComponent({
  components: {
    PrismEditor,
  },
  props: {
    content: {
      type: String,
      default: null,
    },
    language: {
      type: String,
      default: 'html',
    },
    lineNumbers: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }) {
    const editorCode = computed(() => {
      const code = slots.default
        ? slots.default()[0].children || props.content
        : props.content
      return code.trim()
    })
    
    const highlighter = (code) => {
      return prism.highlight(code, prism.languages[props.language])
    }

    return { editorCode, highlighter }
  },
})
</script>

<style lang="scss">

@import '@magenta-ui/styles/scss/variables.scss';

.mag-code {
  background: $code-editor-bg;
  color: $white;
  font-family: $code-editor-font-family;
  font-size: $code-editor-font-size;
  line-height: $code-editor-line-height;
  border-radius: $code-editor-radius;
  padding: $code-editor-padding-vertical $code-editor-padding-horizontal;
}

.mag-code-content {
  display: none;
}

.prism-editor__textarea:focus {
  outline: none;
}
</style>
