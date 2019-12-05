module.exports = {
  // "roots": [
  //   "<rootDir>/src"
  // ],
  preset: 'ts-jest',
  testEnvironment: 'node',
  coveragePathIgnorePatterns: [ "/node_modules/" ],
  transform: {
      "^.+\\.jsx?$": "babel-jest",
      // "^.+\\.jsx?$": "ts-jest"
    },
};