module.exports = {
  name: 'graphql-playground-data-access-core',
  preset: '../../../jest.config.js',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory:
    '../../../coverage/libs/graphql-playground/data-access-core'
};
