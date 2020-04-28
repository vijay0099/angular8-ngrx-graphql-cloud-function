module.exports = {
  name: 'shared-feature-ngbootstrap',
  preset: '../../../jest.config.js',
  coverageDirectory:
    '../../../coverage/libs/shared/feature-ngbootstrap',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
