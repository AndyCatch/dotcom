// gulpfile.js
var gulp = require("gulp")
var sass = require("gulp-dart-sass")
var cleanCSS = require("gulp-clean-css")
var sourcemaps = require("gulp-sourcemaps")

var browserSync = require("browser-sync").create()

// Set a function to compile your .scss files
function compileCSS() {
  return gulp
    .src("src/css/app.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(
      cleanCSS({
        compatibility: "ie8",
      })
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("dist/css")) // this results in a "app.css" in the dist folder
    .pipe(browserSync.stream())
}

function html(html) {
  return gulp.src("src/index.html").pipe(gulp.dest("dist"))
}

function fonts(fonts) {
  return gulp.src("src/fonts/*").pipe(gulp.dest("dist/fonts"))
}

function js(js) {
  return gulp.src("src/js/*.js").pipe(gulp.dest("dist/js"))
}

function images(images) {
  return gulp.src("src/images/*").pipe(gulp.dest("dist/images"))
}

// Sets up a function called watch(), containing the gulp.watch method
function watch(watch) {
  browserSync.init({
    server: {
      baseDir: "dist",
    },
  })

  // If any ".html" file is updated then reruns gulp html task to move files to dist folder and also updates live server
  gulp.watch("src/*.html", gulp.series(html)).on("change", browserSync.reload)
  gulp.watch("src/css/app.scss", compileCSS)
}

// Runs all the following tasks on "gulp" command
exports.default = gulp.series(html, compileCSS, js, fonts, images, watch)
