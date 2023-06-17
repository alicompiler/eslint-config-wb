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

Then, add the following to your `.eslintrc` file:

```
{
  "extends": "wbox-frontend"
}
```
