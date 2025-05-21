/**
 * @fileoverview Use single quotes for string literals without interpolation
 */
"use strict";

module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Use single quotes instead of double quotes when not interpolating",
      category: "Green Code",
      recommended: false,
    },
    messages: {
      PreferSingleQuotes: "Use single quotes ('') instead of double quotes (\"\") for static strings to save CPU cycles.",
    },
    fixable: "code",
    schema: [],
  },

  create(context) {
    return {
      Literal(node) {
        if (typeof node.value === "string" && context.getSourceCode().getText(node).startsWith("\"")) {
          context.report({
            node,
            messageId: "PreferSingleQuotes",
            fix(fixer) {
              const raw = context.getSourceCode().getText(node);
              const singleQuoted = `'${node.value.replace(/'/g, "\\'")}'`;
              return fixer.replaceText(node, singleQuoted);
            },
          });
        }
      },
    };
  },
};