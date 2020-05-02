module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "jasmine": true
    },
    "extends": "standard",
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "jasmine"
    ],
    "rules": {
        "@typescript-eslint/class-name-casing": "error",
        "@typescript-eslint/consistent-type-definitions": "error",
        "@typescript-eslint/explicit-member-accessibility": [
            "off",
            {
                "accessibility": "explicit"
            }
        ],
        "@typescript-eslint/indent": [2, 2, {"SwitchCase": 1}],
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                "multiline": {
                    "delimiter": "semi",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": false
                }
            }
        ],
        "@typescript-eslint/member-ordering": ["error",
            {
      'classes': [
        'field', 'constructor', 'method'
      ],
    }],
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-non-null-assertion": "error",
        "@typescript-eslint/no-use-before-define": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/quotes": [
            "error",
            "single"
        ],
        "@typescript-eslint/type-annotation-spacing": "error",
        "@typescript-eslint/unified-signatures": "error",
        "arrow-body-style": "error",
        "camelcase": "off",
        "constructor-super": "error",
        "curly": "error",
        "dot-notation": "off",
        "eol-last": "error",
        "eqeqeq": [
            "error",
            "smart"
        ],
        "guard-for-in": "error",
        "id-blacklist": "off",
        "id-match": "off",
        "import/no-deprecated": "warn",
        "max-len": [
            "error",
            {
                "code": 140
            }
        ],
        "no-bitwise": "error",
        "no-caller": "error",
        "no-console": [
            "error",
            {
                "allow": [
                    "log",
                    "warn",
                    "dir",
                    "timeLog",
                    "assert",
                    "clear",
                    "count",
                    "countReset",
                    "group",
                    "groupEnd",
                    "table",
                    "dirxml",
                    "error",
                    "groupCollapsed",
                    "Console",
                    "profile",
                    "profileEnd",
                    "timeStamp",
                    "context"
                ]
            }
        ],
        "no-debugger": "error",
        "no-empty": "off",
        "no-eval": "error",
        "no-fallthrough": "error",
        "no-new-wrappers": "error",
        "no-shadow": [
            "error",
            {
                "hoist": "all"
            }
        ],
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-undef-init": "error",
        "no-underscore-dangle": "off",
        "no-unused-expressions": "error",
        "no-unused-labels": "error",
        "no-var": "error",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error", {
            "vars": "all",
            "args": "after-used",
            "ignoreRestSiblings": false
        }],
        "prefer-const": "error",
        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": "error",
        "radix": "error",
        "spaced-comment": "error"
    }
};
