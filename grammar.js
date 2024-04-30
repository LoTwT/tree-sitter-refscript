/* eslint-disable */

/// <reference types="tree-sitter-cli/dsl" />

const TypeScript = require("tree-sitter-typescript/typescript/grammar")

module.exports = grammar(TypeScript, {
  name: "refscript",
  rules: {},
})
