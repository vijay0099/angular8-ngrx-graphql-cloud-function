module.exports = {
  name: 'shared-util-validations',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/util-validations',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
