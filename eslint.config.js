import js from "@eslint/js";
import jest from "eslint-plugin-jest";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        require: "readonly",
        module: "readonly",
        __dirname: "readonly",

        console: "readonly",
        setTimeout: "readonly",
        setInterval: "readonly",
        clearTimeout: "readonly",
        clearInterval: "readonly",
        Promise: "readonly", 
      },
    },
  },

  {
    files: ["**/*.test.js"],
    languageOptions: {
      globals: {
        describe: "readonly",
        it: "readonly",
        test: "readonly",
        expect: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly",
        beforeAll: "readonly",
        afterAll: "readonly",
      },
    },
    plugins: {
      jest: jest,
    },
    rules: {
      "jest/prefer-expect-assertions": "off", 
    },
  },

  {
    rules: {}
  }
];