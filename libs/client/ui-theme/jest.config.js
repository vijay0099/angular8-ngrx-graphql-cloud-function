module.exports = {
  name: 'demo1-ui-theme',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/ui-theme',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
