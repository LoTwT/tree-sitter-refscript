// @ts-check

import { defineFlatConfig } from "@ayingott/eslint-config"

export default defineFlatConfig(
  [
    {
      ignores: ["grammar.js", "**/target/**", "**/src/**"],
    },
  ],
  {
    prettier: true,
    vue: false,
    unocss: false,
    react: false,
  },
)
