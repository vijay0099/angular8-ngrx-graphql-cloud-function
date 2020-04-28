module.exports = {
  name: 'shared-data-access-core',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/data-access-core',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
