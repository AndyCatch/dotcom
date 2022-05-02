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
			// UnComment in final build
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

gulp.task('compileTypeCSS', function () {
	return (
		gulp
			.src('src/css/typography.scss')
			// .pipe(sourcemaps.init())
			.pipe(sass().on('error', sass.logError))
			// UnComment in final build
			// .pipe(
			//   cleanCSS({
			//     compatibility: 'ie8',
			//     rebase: false,
			//   })
			// )
			// .pipe(sourcemaps.write())
			.pipe(gulp.dest('dist/css')) // this results in a "typography.css" in the dist folder
			.pipe(browserSync.stream())
	)
})

gulp.task('singlePageJS', function () {
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

gulp.task('projectJS', function () {
	return pipeline(
		gulp.src('src/js/project.js'),
		// sourcemaps.init(),
		webpack({
			mode: 'none',
			output: {
				filename: 'project.js',
			},
		}),
		uglify(),
		// sourcemaps.write(),
		gulp.dest('dist/js')
	)
})

// No sourcemaps / webpack to keep it vanilla JS
gulp.task('currentPage', function () {
	return pipeline(gulp.src('src/js/currentPage.js'), gulp.dest('dist/js'))
})

gulp.task('html', function () {
	return gulp.src('src/*.html').pipe(gulp.dest('dist'))
})

gulp.task('fonts', function () {
	return gulp.src('src/fonts/*').pipe(gulp.dest('dist/fonts'))
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
	// HTML Watchers
	gulp.watch('src/*.html', gulp.series('html')).on('change', browserSync.reload)

	// JS Watchers
	gulp
		.watch(['src/js/*.js', '!src/js/project.js'], gulp.series('singlePageJS'))
		.on('change', browserSync.reload)

	gulp
		.watch('src/js/project.js', gulp.series('projectJS'))
		.on('change', browserSync.reload)

	gulp
		.watch('src/js/currentPage.js', gulp.series('currentPage'))
		.on('change', browserSync.reload)

	// CSS / .SCSS Watchers
	gulp
		.watch('src/css/app.scss', gulp.series('compileCSS'))
		.on('change', browserSync.reload)
	gulp
		.watch('src/css/designTokens.css', gulp.series('compileCSS'))
		.on('change', browserSync.reload)
	gulp
		.watch('src/css/mobile.scss', gulp.series('compileCSS'))
		.on('change', browserSync.reload)
	gulp
		.watch('src/css/tablet.scss', gulp.series('compileCSS'))
		.on('change', browserSync.reload)
	gulp
		.watch('src/css/modules/*.scss', gulp.series('compileCSS'))
		.on('change', browserSync.reload)

	gulp.watch('src/css/typography.scss', gulp.series('compileTypeCSS'))

	// Misc Watchers
	gulp.watch('src/fonts/*', gulp.series('fonts'))
	gulp.watch('src/img/*', gulp.series('images'))
})

gulp.task(
	'default',
	gulp.parallel(
		'html',
		'compileCSS',
		'compileTypeCSS',
		'singlePageJS',
		'projectJS',
		'currentPage',
		'fonts',
		'images',
		'watch'
	)
)
