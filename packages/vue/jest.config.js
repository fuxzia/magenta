/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  transform: {
    '^.+\\.js$': 'ts-jest',
    '^.+\\.ts$': 'ts-jest',
    '^.*\\.vue$': 'vue-jest',
  },
  testMatch: ['<rootDir>/**/*.test.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'vue'],
  moduleNameMapper: { "^@/(.*)$": "<rootDir>/src/$1" },
}
