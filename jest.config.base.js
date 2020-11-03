// the base jest config
// https://github.com/entria/entria-fullstack/blob/master/jest.config.js
module.exports = {
  // the root matches only its test, not sub packages
  testPathIgnorePatterns: ['/node_modules/', '/release/', '/dist/', '/build/'],
  collectCoverageFrom: [
    '**/src/**/*.{js,jsx,ts,tsx}',
    '!**/__tests__/**',
    '!**/*.{spec,test}.{js,jsx,ts,tsx}',
  ],
  setupFilesAfterEnv: ['./test/setup.js'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  // implied by each sub modules
  moduleNameMapper: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|)$)': 'identity-obj-proxy',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
};
