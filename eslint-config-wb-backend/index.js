module.exports = {
    env: {
        browser: false,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'airbnb-base',
        "airbnb-typescript/base",
        "plugin:@typescript-eslint/eslint-recommended",
        'plugin:@typescript-eslint/recommended',
    ],
    plugins: [
        'prettier',
        '@typescript-eslint',
    ],

    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },

    rules: {
        'prettier/prettier': 'error',
        indent: 'off',
        '@typescript-eslint/indent': 'off',
        "import/no-import-module-exports": "off",
        "import/prefer-default-export": "off",
        "import/no-default-export": "error",
        "import/no-cycle": "off",
    }
};
