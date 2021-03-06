module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "es6": true
  },
  "rules": {
    "comma-dangle": [
      "error"
    ],
    "no-cond-assign": [
      "error"
    ],
    "no-console": [
      "warn"
    ],
    "no-constant-condition": [
      "error"
    ],
    "no-debugger": [
      "error"
    ],
    "no-dupe-args": [
      "error"
    ],
    "no-dupe-keys": [
      "error"
    ],
    "no-duplicate-case": [
      "error"
    ],
    "no-empty": [
      "error"
    ],
    "no-empty-character-class": [
      "error"
    ],
    "no-ex-assign": [
      "error"
    ],
    "no-extra-boolean-cast": [
      "warn"
    ],
    "no-extra-parens": [
      "error"
    ],
    "no-extra-semi": [
      "error"
    ],
    "no-func-assign": [
      "error"
    ],
    "no-inner-declarations": [
      "error"
    ],
    "no-invalid-regexp": [
      "error"
    ],
    "no-irregular-whitespace": [
      "error"
    ],
    "no-negated-in-lhs": [
      "error"
    ],
    "no-obj-calls": [
      "error"
    ],
    "no-regex-spaces": [
      "error"
    ],
    "no-unexpected-multiline": [
      "error"
    ],
    "no-unreachable": [
      "error"
    ],
    "use-isnan": [
      "error"
    ],
    "valid-jsdoc": [
      "error",
      {
        "requireReturn": false
      }
    ],
    "valid-typeof": [
      "error"
    ],
    "accessor-pairs": [
      "error"
    ],
    "array-callback-return": [
      "error"
    ],
    "block-scoped-var": [
      "error"
    ],
    "complexity": [
      "warn"
    ],
    "consistent-return": [
      "error"
    ],
    "curly": [
      "error",
      "multi-line"
    ],
    "default-case": [
      "warn"
    ],
    "dot-location": [
      "error",
      "property"
    ],
    "dot-notation": [
      "error"
    ],
    "eqeqeq": [
      "error"
    ],
    "guard-for-in": [
      "error"
    ],
    "no-alert": [
      "error"
    ],
    "no-caller": [
      "error"
    ],
    "no-case-declarations": [
      "error"
    ],
    "no-div-regex": [
      "error"
    ],
    "no-else-return": [
      "error"
    ],
    "no-empty-function": [
      "error"
    ],
    "no-empty-pattern": [
      "error"
    ],
    "no-eq-null": [
      "error"
    ],
    "no-eval": [
      "error"
    ],
    "no-extend-native": [
      "error"
    ],
    "no-extra-bind": [
      "error"
    ],
    "no-extra-label": [
      "error"
    ],
    "no-fallthrough": [
      "error"
    ],
    "no-floating-decimal": [
      "error"
    ],
    "no-implicit-coercion": [
      "error"
    ],
    "no-implicit-globals": [
      "error"
    ],
    "no-implied-eval": [
      "error"
    ],
    "no-iterator": [
      "error"
    ],
    "no-lone-blocks": [
      "error"
    ],
    "no-loop-func": [
      "error"
    ],
    "no-native-reassign": [
      "error"
    ],
    "no-new": [
      "error"
    ],
    "no-new-func": [
      "error"
    ],
    "no-new-wrappers": [
      "error"
    ],
    "no-octal": [
      "error"
    ],
    "no-octal-escape": [
      "error"
    ],
    "no-proto": [
      "error"
    ],
    "no-return-assign": [
      "error"
    ],
    "no-script-url": [
      "error"
    ],
    "no-self-assign": [
      "error"
    ],
    "no-self-compare": [
      "error"
    ],
    "no-sequences": [
      "error"
    ],
    "no-throw-literal": [
      "error"
    ],
    "no-unmodified-loop-condition": [
      "error"
    ],
    "no-unused-expressions": [
      "error"
    ],
    "no-unused-labels": [
      "error"
    ],
    "no-useless-call": [
      "error"
    ],
    "no-useless-concat": [
      "error"
    ],
    "no-useless-escape": [
      "error"
    ],
    "no-void": [
      "error"
    ],
    "no-with": [
      "error"
    ],
    "radix": [
      "error"
    ],
    "vars-on-top": [
      "error"
    ],
    "wrap-iife": [
      "error"
    ],
    "yoda": [
      "error"
    ],
    "no-delete-var": [
      "error"
    ],
    "no-label-var": [
      "error"
    ],
    "no-shadow": [
      "error"
    ],
    "no-shadow-restricted-names": [
      "error"
    ],
    "no-undef": [
      "error"
    ],
    "no-undef-init": [
      "error"
    ],
    "no-undefined": [
      "error"
    ],
    "no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_"
      }
    ],
    "no-use-before-define": [
      "error",
      {
        "functions": false
      }
    ],
    "array-bracket-spacing": [
      "error",
      "never"
    ],
    "block-spacing": [
      "error",
      "always"
    ],
    "brace-style": [
      "error",
      "1tbs",
      {
        "allowSingleLine": true
      }
    ],
    "camelcase": [
      "error",
      {
        "properties": "never"
      }
    ],
    "comma-spacing": [
      "error"
    ],
    "comma-style": [
      "error"
    ],
    "computed-property-spacing": [
      "error"
    ],
    "consistent-this": [
      "error",
      "self"
    ],
    "eol-last": [
      "error",
      "unix"
    ],
    "func-style": [
      "error",
      "declaration"
    ],
    "id-length": [
      "error",
      {
        "exceptions": [
          "_",
          "i",
          "j"
        ]
      }
    ],
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "key-spacing": [
      "error",
      {
        "mode": "strict"
      }
    ],
    "keyword-spacing": [
      "error"
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "lines-around-comment": [
      "error",
      {
        "beforeBlockComment": false
      }
    ],
    "max-depth": [
      "error"
    ],
    "max-len": [
      "error",
      {
        "code": 80
      }
    ],
    "max-nested-callbacks": [
      "error",
      4
    ],
    "max-params": [
      "error",
      4
    ],
    "max-statements": [
      "error",
      20
    ],
    "max-statements-per-line": [
      "error"
    ],
    "new-cap": [
      "error"
    ],
    "new-parens": [
      "error"
    ],
    "newline-per-chained-call": [
      "error",
      {
        "ignoreChainWithDepth": 3
      }
    ],
    "no-array-constructor": [
      "error"
    ],
    "no-lonely-if": [
      "error"
    ],
    "no-mixed-spaces-and-tabs": [
      "error"
    ],
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1,
        "maxBOF": 0,
        "maxEOF": 0
      }
    ],
    "no-negated-condition": [
      "error"
    ],
    "no-nested-ternary": [
      "error"
    ],
    "no-new-object": [
      "error"
    ],
    "no-spaced-func": [
      "error"
    ],
    "no-trailing-spaces": [
      "error"
    ],
    "no-unneeded-ternary": [
      "error"
    ],
    "no-whitespace-before-property": [
      "error"
    ],
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "one-var": [
      "error",
      {
        "initialized": "never",
        "uninitialized": "always"
      }
    ],
    "one-var-declaration-per-line": [
      "error",
      "initializations"
    ],
    "operator-linebreak": [
      "error",
      "after"
    ],
    "padded-blocks": [
      "error",
      "never"
    ],
    "quote-props": [
      "error",
      "consistent-as-needed"
    ],
    "quotes": [
      "error",
      "single",
      {
        "avoidEscape": true
      }
    ],
    "require-jsdoc": [
      "warn",
      {
        "require": {
          "FunctionDeclaration": true,
          "MethodDefinition": true,
          "ClassDeclaration": true
        }
      }
    ],
    "semi": [
      "error"
    ],
    "semi-spacing": [
      "error"
    ],
    "sort-imports": [
      "error",
      {
        "memberSyntaxSortOrder": [
          "none",
          "all",
          "single",
          "multiple"
        ]
      }
    ],
    "sort-vars": [
      "error"
    ],
    "space-before-blocks": [
      "error"
    ],
    "space-before-function-paren": [
      "error",
      "never"
    ],
    "space-in-parens": [
      "error"
    ],
    "space-infix-ops": [
      "error"
    ],
    "space-unary-ops": [
      "error"
    ],
    "spaced-comment": [
      "error"
    ],
    "arrow-parens": [
      "error",
      "as-needed"
    ],
    "arrow-spacing": [
      "error"
    ],
    "constructor-super": [
      "error"
    ],
    "generator-star-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "no-class-assign": [
      "error"
    ],
    "no-confusing-arrow": [
      "error"
    ],
    "no-const-assign": [
      "error"
    ],
    "no-dupe-class-members": [
      "error"
    ],
    "no-duplicate-imports": [
      "error"
    ],
    "no-new-symbol": [
      "error"
    ],
    "no-this-before-super": [
      "error"
    ],
    "no-useless-constructor": [
      "error"
    ],
    "no-var": [
      "error"
    ],
    "object-shorthand": [
      "warn"
    ],
    "prefer-arrow-callback": [
      "error",
      {
        "allowNamedFunctions": true
      }
    ],
    "prefer-const": [
      "error",
      {
        "destructuring": "all"
      }
    ],
    "prefer-rest-params": [
      "error"
    ],
    "prefer-spread": [
      "error"
    ],
    "prefer-template": [
      "warn"
    ],
    "template-curly-spacing": [
      "error"
    ],
    "yield-star-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ]
  }
};
