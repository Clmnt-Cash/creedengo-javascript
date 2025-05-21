"use strict";

const rule = require("../../../lib/rules/prefer-single-quotes");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2020 } });

ruleTester.run("prefer-single-quotes", rule, {
  valid: [
    "const msg = 'Hello';",
    "const msg = `Hello ${name}`;",
    "const msg = `No interpolation here`;",
  ],
  invalid: [
    {
      code: 'const msg = "Hello";',
      output: "const msg = 'Hello';",
      errors: [{ messageId: "PreferSingleQuotes" }],
    },
    {
      code: 'const msg = "Can\'t wait";',
      output: "const msg = 'Can\\'t wait';",
      errors: [{ messageId: "PreferSingleQuotes" }],
    },
  ],
});
