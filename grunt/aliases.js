module.exports = {
  'default': [
    'sass:dev',
    'browserify:dev',
    'copy:dev',
    'connect:livereload',
    'watch'
  ],
  'build': [
    'sass:build',
    'browserify:dev',
    'copy:build',
    'uglify',
    'htmlmin:build'
  ],
  'test': [
    'browserify:specs',
    'jasmine:dev'
  ],
  'coverage': [
    'browserify:dev',
    'browserify:specs',
    'jasmine:coverage'
  ]
};
