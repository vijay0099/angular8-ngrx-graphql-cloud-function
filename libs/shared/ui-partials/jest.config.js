module.exports = {
  name: 'shared-ui-partials',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/ui-partials',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
