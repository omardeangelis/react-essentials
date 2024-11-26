import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import eslintPluginPrettier from "eslint-plugin-prettier";
import pluginQuery from '@tanstack/eslint-plugin-query'

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      prettier: eslintPluginPrettier,
      "@tanstack/query": pluginQuery,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      "prettier/prettier": [
        "error",
        {
          "trailingComma": "es5",
          "semi": false,
          "singleQuote": false,
          "printWidth": 80,
        },
      ],
      '@tanstack/query/exhaustive-deps': 'error',
    },
  }
);