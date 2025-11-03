// eslint.config.mjs
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import nextPlugin from "@next/eslint-plugin-next";

export default [
  {
    // Global ignores (similar to .eslintignore)
    ignores: [".next/", "node_modules/", "out/"],
  },
  pluginJs.configs.recommended, // Basic JS recommended rules
  ...tseslint.configs.recommended, // TypeScript recommended rules
  {
    // Next.js specific configurations
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      // Your custom rules
      'react/no-unescaped-entities': ['error', {
        forbid: ['>', '}']
      }],
      '@typescript-eslint/no-unused-vars': ['warn', {
        args: 'after-used',
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
      }],
      'react-hooks/exhaustive-deps': ['warn', {
        additionalHooks: '(useEffect|useLayoutEffect|useInsertionEffect)',
      }],
      'prefer-const': 'warn',
      'no-unused-expressions': 'warn',
    },
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
];