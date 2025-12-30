import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

export default [
  // 1. Common JS/TS Rules
  ...tseslint.configs.recommended,

  // 2. Astro Specific Rules
  ...eslintPluginAstro.configs.recommended,

  {
    // Global ignores (replaces .eslintignore)
    ignores: ["dist/", ".astro/", "node_modules/"],
  },

  {
    files: ["**/*.astro"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: [".astro"],
      },
    },
    rules: {
      // Add custom Astro rules here
      "astro/no-set-html-directive": "warn",
    },
  },

  {
    // Rules for your React components (tsx/jsx) and TypeScript files
    files: ["**/*.{ts,tsx,js,jsx}"],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "no-console": "warn",
    },
  },
];
