module.exports = {
  root: true,
  env: {
      browser: true,
      es2021: true,
      node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': ['error'],
    'semi': ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/no-explicit-any': 'off',
    'vue/no-v-html': 'off',
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
