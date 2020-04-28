module.exports = {
  name: 'shared-feature-wizards',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/feature-wizards',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
