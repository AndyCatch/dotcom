// gulpfile.js
var gulp = require('gulp');

// if you're using @include keywords in your .scss, you need to use gulp-dart-sass
// run $ npm i gulp-dart-sass
var sass = require('gulp-dart-sass');

// Set a function to compile your .scss files
function compileCSS(){
  return gulp.src("css/app.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest("dist")) // this results in a "app.css" in the dist folder
}

// Sets up a function called watch(), containing the gulp.watch method
function watch(){

  // points to your .scss source, references the above function to call on change
  gulp.watch('css/app.scss', compileCSS)

}

// Exposes the watch() task, run $ gulp watch
exports.watch = watch