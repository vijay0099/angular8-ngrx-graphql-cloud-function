module.exports = {
  name: 'shared-ui-material-preview',
  preset: '../../../jest.config.js',
  coverageDirectory:
    '../../../coverage/libs/shared/ui-material-preview',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
