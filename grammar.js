/// <reference types="tree-sitter-cli/dsl" />

const TypeScript = require("tree-sitter-typescript/typescript/grammar")

module.exports = grammar(TypeScript, {
  name: "refscript",

  rules: {
    declaration: ($) =>
      choice(
        $.function_declaration,
        $.generator_function_declaration,
        $.class_declaration,
        $.lexical_declaration,
        $.variable_declaration,
        $.ref_declaration,
      ),
    ref_declaration: ($) =>
      seq(
        field("kind", choice("ref")),
        commaSep1($.variable_declarator),
        $._semicolon,
      ),
  },
})

/**
 * Creates a rule to match one or more of the rules separated by a comma
 *
 * @param {Rule} rule
 *
 * @return {SeqRule}
 *
 */
function commaSep1(rule) {
  return seq(rule, repeat(seq(",", rule)))
}

/**
 * Creates a rule to optionally match one or more of the rules separated by a comma
 *
 * @param {Rule} rule
 *
 * @return {ChoiceRule}
 *
 */
function commaSep(rule) {
  return optional(commaSep1(rule))
}
