module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  rules: {
    'semi': ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'vue/no-v-html': 'error',
    'vue/attributes-order': 'error',
    'vue/order-in-components': 'error',
    'vue/require-explicit-emits': 'error',
    'vue/html-indent': 'error',
    'vue/max-attributes-per-line': 'error',
    'vue/mustache-interpolation-spacing': 'error',
    'vue/html-self-closing': 'error',
    'vue/html-closing-bracket-newline': 'error',
    'vue/html-closing-bracket-spacing': ['error', {
      'startTag': 'never',
      'endTag': 'never',
      'selfClosingTag': 'always',
    }],
  },
}
