module.exports =   {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true
  },
  globals: {
    ga: true,
    chrome: true,
    __DEV__: true
  },
  // 解析 .vue 文件
  parser: 'vue-eslint-parser', 
  extends: [
    'plugin:json/recommended',
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/prettier'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': 'error',
    'vue/multi-word-component-names':'off',
    'no-undef': 'off',
    'no-unused-vars': 'off'
  }
}
