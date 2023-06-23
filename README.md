# Shared ESLint Configuration

This package provides a shared ESLint configuration for the wbox applications. it provides two packages:

- eslint-config-wbox-frontend: shared configuration for react applications
- eslint-config-wbox-backend: shared configuration for nodejs applications

## eslint-config-wbox-frontend

This package provides a shared ESLint configuration for the wbox react applications. to use it in your project, install
it as a dev dependency:

```
npm install --save-dev eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser  eslint-config-airbnb eslint-config-airbnb-typescript eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-import eslint-config-prettier eslint-plugin-prettier eslint-config-wbox-frontend

# or

yarn add --dev eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser  eslint-config-airbnb eslint-config-airbnb-typescript eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-plugin-import eslint-config-prettier eslint-plugin-prettier eslint-config-wbox-frontend
```

then you need to create .prettierrc file in the root of your project and add the following:

```
{
  "tabWidth": 4,
  "singleQuote": true,
  "trailingComma": "all",
  "semi": true,
  "printWidth": 120,
  "arrowParens": "avoid",
  "bracketSpacing": false,
  "endOfLine": "lf",
  "htmlWhitespaceSensitivity": "css",
  "jsxBracketSameLine": false,
  "proseWrap": "preserve",
  "requirePragma": false,
  "useTabs": false,
  "vueIndentScriptAndStyle": true
}
```

Then, add the following to your `.eslintrc` file:

```
{
  "extends": "wbox-frontend"
}
```


## eslint-config-wbox-backend
This package provides a shared ESLint configuration for the wbox nodejs applications. to use it in your project, install
it as a dev dependency:

```
npm install --save-dev eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb-base eslint-config-airbnb-typescript eslint-plugin-import eslint-config-prettier eslint-plugin-prettier eslint-config-wbox-backend

# or

yarn add --dev eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb-base eslint-config-airbnb-typescript eslint-plugin-import eslint-config-prettier eslint-plugin-prettier eslint-config-wbox-backend
```

then you need to create .prettierrc file in the root of your project and add the following:

```
{
  "tabWidth": 4,
  "singleQuote": true,
  "trailingComma": "all",
  "semi": true,
  "printWidth": 120,
  "arrowParens": "avoid",
  "bracketSpacing": false,
  "endOfLine": "lf",
  "htmlWhitespaceSensitivity": "css",
  "jsxBracketSameLine": false,
  "proseWrap": "preserve",
  "requirePragma": false,
  "useTabs": false,
  "vueIndentScriptAndStyle": true
}
```

Then, add the following to your `.eslintrc` file:

```
{
  "extends": "wbox-backend"
}
```
