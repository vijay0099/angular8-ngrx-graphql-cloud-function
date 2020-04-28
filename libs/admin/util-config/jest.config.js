module.exports = {
  name: 'admin-util-config',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/admin/util-config',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
