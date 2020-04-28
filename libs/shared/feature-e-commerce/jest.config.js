module.exports = {
  name: 'shared-e-commerce',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/e-commerce',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
