module.exports = {
  name: 'shared-util-services',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/util-services',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
