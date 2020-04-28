module.exports = {
  name: 'shared-feature-crud',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/feature-crud',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
