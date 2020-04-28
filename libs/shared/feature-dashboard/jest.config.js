module.exports = {
  name: 'shared-ui-dashboard',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/ui-dashboard',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
