package tree_sitter_refscript_test

import (
	"testing"

	tree_sitter "github.com/smacker/go-tree-sitter"
	"github.com/tree-sitter/tree-sitter-refscript"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_refscript.Language())
	if language == nil {
		t.Errorf("Error loading Refscript grammar")
	}
}
