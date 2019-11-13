module.exports = {
  parser: "babel-eslint",
  plugins: ["react"],
  globals: {
    importScripts: true
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  rules: {
    "no-mixed-operators": ["off"],
    "no-console": ["off"],
    "react/jsx-indent": ["off"],
    "react/no-children-prop": ["off"],
    "react/display-name": ["off"],
    "react/no-unescaped-entities": ["off"],
    "react/destructuring-assignment": ["off"],
    "import/no-named-as-default-member": ["off"],
    "import/named": ["off"],
    "import/order": ["off"],
    "import/no-extraneous-dependencies": ["off"],
    "import/no-named-as-default": ["off"],
    "react/jsx-indent-props": ["off"],
    "flowtype/require-return-type": ["off"],
    camelcase: ["off"],
    "react/no-array-index-key": ["warn"],
    "react/jsx-one-expression-per-line": ["off"],
    "react/prop-types": "off",
    "react/jsx-tag-spacing": [
      "warn",
      {
        closingSlash: "never",
        beforeSelfClosing: "always",
        afterOpening: "never",
        beforeClosing: "never"
      }
    ],
    // "react/jsx-indent": ["warn", "tab"],
    "react/jsx-key": ["error"],
    "react/no-will-update-set-state": ["error"],
    complexity: ["warn", 9],
    "max-nested-callbacks": ["warn", 8],
    "no-unused-vars": "warn",
    "max-statements": [
      "warn",
      {
        max: 12
      }
    ],
    "max-statements-per-line": [
      "warn",
      {
        max: 1
      }
    ],
    "getter-return": "warn",
    "jsx-quotes": ["warn", "prefer-double"]
  },
  parserOptions: {
    ecmaVersion: 8,
    sourceType: "module",
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      legacyDecorators: true,
      jsx: true,
      modules: true,
      arrowFunctions: true,
      classes: true,
      experimentalObjectRestSpread: true
    }
  },
  settings: {
    react: {
      createClass: "createReactClass",
      pragma: "React",
      version: "detect"
    },
    "import/resolver": {
      "@storesWeb": {
        paths: ["packages/web/src/stores"]
      }
    },
    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
      "forbidExtraProps",
      { property: "freeze", object: "Object" },
      { property: "myFavoriteWrapper" }
    ]
  }
};
