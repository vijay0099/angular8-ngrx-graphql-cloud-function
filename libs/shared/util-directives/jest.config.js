module.exports = {
  name: 'shared-util-directives',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/util-directives',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
