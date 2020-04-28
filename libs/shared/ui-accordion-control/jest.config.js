module.exports = {
  name: 'shared-ui-accordion-control',
  preset: '../../../jest.config.js',
  coverageDirectory:
    '../../../coverage/libs/shared/ui-accordion-control',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
