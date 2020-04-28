module.exports = {
  name: 'shared-feature-mail',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/feature-mail',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
