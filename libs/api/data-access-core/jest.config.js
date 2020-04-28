module.exports = {
  name: 'api-data-access-core',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/api/data-access-core',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
