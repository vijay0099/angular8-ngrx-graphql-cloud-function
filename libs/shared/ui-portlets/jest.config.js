module.exports = {
  name: 'shared-ui-portlets',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/ui-portlets',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
