module.exports = {
  name: 'shared-feature-auth',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/feature-auth',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
