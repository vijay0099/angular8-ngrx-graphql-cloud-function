module.exports = {
  name: 'demo2-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/demo2-app',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
