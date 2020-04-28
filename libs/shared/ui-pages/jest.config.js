module.exports = {
  name: 'shared-ui-pages',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/ui-pages',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
