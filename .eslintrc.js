module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  rules: {
    'space-before-function-paren': 0,
    'no-unused-expressions': 0,
    'no-unused-vars': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
