module.exports = {
  name: 'client-data-access-operations',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/client/data-access-operations',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
