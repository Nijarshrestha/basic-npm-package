module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: 'eslint:recommended',
    overrides: [
        {
            env: {
                node: true,
                'jest/globals': true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'no-console': [
            'error',
            {
                allow: ['warn', 'error', 'info'],
            },
        ],
    },
}
