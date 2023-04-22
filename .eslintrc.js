// eslint-disable-next-line no-undef
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        'plugin:@typescript-eslint/recommended',
    ],
    overrides: [],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'commonjs',
        parser: '@typescript-eslint/parser',
    },
    plugins: [
        'vue',
        //  '@typescript-eslint'
        // 添加 eslint-plugin-disable 插件
        'disable',
    ],
    rules: {
        'vue/multi-word-component-names': [
            'error',
            {
                ignores: ['index'], //需要忽略的组件名
            },
        ],
        // 添加禁用规则的规则集
        'disable/missing-jsdoc': 'off',
    },
};
