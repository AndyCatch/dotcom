var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');
gulp.task('default', function() {
  // we want to run "sass css/app.scss master.css --watch"

  return gulp.src("css/app.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("."))
});