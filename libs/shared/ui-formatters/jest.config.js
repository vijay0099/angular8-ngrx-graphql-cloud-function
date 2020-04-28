module.exports = {
  name: 'shared-ui-formatters',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/ui-formatters',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
