module.exports = {
    parser: "babel-eslint",
    parserOptions: {
        "ecmaVersion": 10,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "env": {
        "browser": true,
    },
    plugins: [
        "standard",
        "react",
    ],
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "airbnb"
    ],
    rules: {
        "linebreak-style": ["error", "windows"],
        "quotes": ["error", "single"],
        "no-var": "error",
        "no-unused-vars": "warn",
        "semi": ["error", "always"],
    },
};
