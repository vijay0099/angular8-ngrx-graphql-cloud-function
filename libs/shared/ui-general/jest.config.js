module.exports = {
  name: 'shared-ui-general',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/ui-general',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
