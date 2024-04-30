// @ts-check

import { defineFlatConfig } from "@ayingott/eslint-config"

export default defineFlatConfig(
  [
    {
      files: ["grammar.js"],
      rules: {
        "eslint-comments/no-unlimited-disable": "off",
      },
    },
  ],
  {
    prettier: true,
    vue: false,
    unocss: false,
    react: false,
  },
)
