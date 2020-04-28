module.exports = {
  name: 'shared-feature-builder',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/feature-builder',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
