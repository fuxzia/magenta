<template>
  <PrismEditor
    class="mag-code"
    v-model="editorCode"
    :highlight="highlighter"
    :line-numbers="lineNumbers"
    readonly />
</template>

<script>
import * as prism from 'prismjs'
import { defineComponent, computed } from 'vue'
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
  setup(props) {
    const { language, content } = props
    const editorCode = computed(() => content)
    const highlighter = (code) => {
      return prism.highlight(code, prism.languages[language]);
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

.prism-editor__textarea:focus {
  outline: none;
}
</style>
