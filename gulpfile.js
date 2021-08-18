// gulpfile.js
var gulp = require('gulp')
var sass = require('gulp-dart-sass')
var cleanCSS = require('gulp-clean-css')
var sourcemaps = require('gulp-sourcemaps')
var uglify = require('gulp-uglify')
var pipeline = require('readable-stream').pipeline
var imagemin = require('gulp-imagemin')
var webpack = require('webpack-stream')

var browserSync = require('browser-sync').create()

// Set a function to compile your .scss files
gulp.task('compileCSS', function () {
  return (
    gulp
      .src('src/css/app.scss')
      // .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      // .pipe(
      //   cleanCSS({
      //     compatibility: 'ie8',
      //     rebase: false,
      //   })
      // )
      // .pipe(sourcemaps.write())
      .pipe(gulp.dest('dist/css')) // this results in a "app.css" in the dist folder
      .pipe(browserSync.stream())
  )
})

gulp.task('html', function () {
  return gulp.src('src/*.html').pipe(gulp.dest('dist'))
})

gulp.task('fonts', function () {
  return gulp.src('src/fonts/*').pipe(gulp.dest('dist/fonts'))
})

// gulp.task('js', function () {
//   return pipeline(
//     gulp.src('src/js/*.js'),
//     sourcemaps.init(),
//     uglify(),
//     sourcemaps.write(),
//     gulp.dest('dist/js')
//   )
// })

// Can't seem to get Webpack to work?
gulp.task('js', function () {
  return pipeline(
    gulp.src('src/js/singlePage.js'),
    sourcemaps.init(),
    webpack({
      mode: 'none',
      output: {
        filename: 'singlePage.js',
      },
    }),
    uglify(),
    sourcemaps.write(),
    gulp.dest('dist/js')
  )
})

gulp.task('images', function () {
  return gulp
    .src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
})

// Sets up a function called watch(), containing the gulp.watch method
gulp.task('watch', function () {
  browserSync.init({ server: { baseDir: 'dist' } })
  // If any ".html" file is updated then reruns gulp html task to move files to dist folder and also updates live server
  gulp.watch('src/*.html', gulp.series('html')).on('change', browserSync.reload)

  // Uglify
  // gulp.watch('src/js/*.js', gulp.series('js')).on('change', browserSync.reload)

  // Webpack
  gulp.watch('src/js/*.js', gulp.series('js')).on('change', browserSync.reload)

  gulp.watch('src/fonts/*', gulp.series('fonts'))
  gulp.watch('src/img/*', gulp.series('images'))

  // If any ".scss" file is updated then reruns gulp scss task to move files to dist folder
  gulp.watch('src/css/app.scss', gulp.series('compileCSS'))
  gulp.watch('src/css/designTokens.css', gulp.series('compileCSS'))
  gulp.watch('src/css/mobile.scss', gulp.series('compileCSS'))
  gulp.watch('src/css/tablet.scss', gulp.series('compileCSS'))
  gulp.watch('src/css/modules/*.scss', gulp.series('compileCSS'))
})

gulp.task(
  'default',
  gulp.parallel('html', 'compileCSS', 'js', 'fonts', 'images', 'watch')
)
