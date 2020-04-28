module.exports = {
  name: 'demo2-util-config',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/demo2/util-config',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
