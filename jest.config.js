module.exports = {
  collectCoverage: true,
  coverageDirectory: 'jest-coverage',
  testEnvironment: 'node',
  transform: {
    '^.+\\.mjs$': 'babel-jest',
    '^.+\\.ts$': 'ts-jest'
  },
  moduleFileExtensions: ['js', 'mjs', 'ts'],
  testMatch: ['**/__tests__/unit/*.test.+(js|mjs)'],
  testPathIgnorePatterns: ['/node_modules/']
};
