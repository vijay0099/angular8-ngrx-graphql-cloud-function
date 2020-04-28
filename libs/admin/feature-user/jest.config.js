module.exports = {
  name: 'shared-feature-user-management',
  preset: '../../../jest.config.js',
  coverageDirectory:
    '../../../coverage/libs/shared/feature-user-management',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
