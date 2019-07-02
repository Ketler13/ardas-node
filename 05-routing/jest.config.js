module.exports = {
  moduleFileExtensions: ["js", "json"],
  transform: {
    "^.+\\.js?$": "babel-jest"
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  testMatch: ["**/tests/unit/**/*.spec.js|**/__tests__/*.js"],
  testURL: "http://localhost/",
  cache: false,
  restoreMocks: true,
  testEnvironment: "node"
};
