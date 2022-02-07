module.exports = {
    testEnvironment: "jsdom",
    roots: ["<rootDir>/"],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    transform: {
      "^.+\\.tsx?$": "ts-jest"
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    globals: {
      'ts-jest': {
        tsconfig: '<rootDir>/tsconfig.jest.json',
      },
    },
  };