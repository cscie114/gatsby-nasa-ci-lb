module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "jest"],
  rules: {
    "react/prop-types": 0,
  },
  settings: {
    react: {
        version: "18.2"
    }
  }
};
