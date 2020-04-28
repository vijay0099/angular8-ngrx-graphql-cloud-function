module.exports = {
  name: 'admin-data-access',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/admin/data-access',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
