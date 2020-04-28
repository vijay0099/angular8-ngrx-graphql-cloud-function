module.exports = {
  name: 'shared-util-config',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/util-config',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
