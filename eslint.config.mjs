import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

const compat = new FlatCompat();

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    languageOptions: {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2021,
        project: "tsconfig.json",
        sourceType: "module",
      },
    },
  },
  // Typescript
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  // NextJS
  {
    ignores: [".next/"],
  },
  ...fixupConfigRules(compat.extends("plugin:@next/next/core-web-vitals")),
  // Rules config
  {
    rules: {
      "@next/next/no-html-link-for-pages": "off",
      "react/jsx-key": "off",
      "tailwindcss/no-custom-classname": "off",
    },
  },
  // Ignore files
  {
    ignores: ["dist/*", ".cache", "public", "node_modules", "*.esm.js"],
  },
];
