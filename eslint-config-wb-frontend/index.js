module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'airbnb',
        'airbnb/hooks',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    plugins: [
        'react',
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
    },

    rules: {
        'prettier/prettier': 'error',
        indent: 'off',
        'import/prefer-default-export': 'off',
        'react/prop-types': 'off',
        'react/jsx-filename-extension': [1, {'extensions': ['.jsx', '.tsx']}],
        'react/react-in-jsx-scope': 'off',
    },
};
