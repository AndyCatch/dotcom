// gulpfile.js
var gulp = require('gulp')
var sass = require('gulp-dart-sass')
var cleanCSS = require('gulp-clean-css')
var uglify = require('gulp-uglify')
var webpack = require('webpack-stream')
var { Transform } = require('stream')
var path = require('path')
var sharp = require('sharp')
var { optimize: optimizeSVG } = require('svgo')

var browserSync = require('browser-sync').create()

// Set a function to compile your .scss files
gulp.task('compileCSS', function () {
	return (
		gulp
			.src('src/css/app.scss', { sourcemaps: true })
			.pipe(sass().on('error', sass.logError))
			// UnComment in final build
			// .pipe(
			//   cleanCSS({
			//     compatibility: 'ie8',
			//     rebase: false,
			//   })
			// )
			.pipe(gulp.dest('dist/css', { sourcemaps: true })) // this results in a "app.css" in the dist folder
			.pipe(browserSync.stream())
	)
})

gulp.task('compileTypeCSS', function () {
	return (
		gulp
			.src('src/css/typography.scss', { sourcemaps: true })
			.pipe(sass().on('error', sass.logError))
			// UnComment in final build
			.pipe(
				cleanCSS({
					compatibility: 'ie8',
					rebase: false,
				})
			)
			.pipe(gulp.dest('dist/css', { sourcemaps: true })) // this results in a "typography.css" in the dist folder
			.pipe(browserSync.stream())
	)
})

gulp.task('singlePageJS', function () {
	return gulp
		.src('src/js/singlePage.js', { sourcemaps: true })
		.pipe(
			webpack({
				mode: 'none',
				output: {
					filename: 'singlePage.js',
				},
			})
		)
		.pipe(uglify())
		.pipe(gulp.dest('dist/js', { sourcemaps: true }))
})

gulp.task('sequencerJS', function () {
	return gulp
		.src('src/js/sequencerMod.js', { sourcemaps: true })
		.pipe(
			webpack({
				mode: 'none',
				output: {
					filename: 'sequencerMod.js',
				},
			})
		)
		.pipe(uglify())
		.pipe(gulp.dest('dist/js', { sourcemaps: true }))
})

// No sourcemaps / webpack to keep it vanilla JS
// gulp.task('sequencerJS', function () {
// 	return gulp.src('src/js/sequencerMod.js').pipe(gulp.dest('dist/js'))
// })

gulp.task('currentPage', function () {
	return gulp.src('src/js/currentPage.js').pipe(gulp.dest('dist/js'))
})

gulp.task('html', function () {
	return gulp.src('src/*.html').pipe(gulp.dest('dist'))
})

gulp.task('fonts', function () {
	return gulp.src('src/fonts/*', { encoding: false }).pipe(gulp.dest('dist/fonts'))
})

// Lossless PNG compression (sharp) + SVG minification (svgo), other files pass through
function optimizeImages() {
	return new Transform({
		objectMode: true,
		transform(file, enc, done) {
			if (!file.isBuffer()) return done(null, file)
			var ext = path.extname(file.path).toLowerCase()
			if (ext === '.svg') {
				file.contents = Buffer.from(optimizeSVG(file.contents.toString(), { path: file.path }).data)
				return done(null, file)
			}
			if (ext === '.png') {
				return sharp(file.contents)
					.png({ compressionLevel: 9, adaptiveFiltering: true })
					.toBuffer()
					.then(function (buf) {
						// Keep the original if re-encoding didn't make it smaller
						if (buf.length < file.contents.length) file.contents = buf
						done(null, file)
					}, done)
			}
			done(null, file)
		},
	})
}

gulp.task('images', function () {
	return gulp.src('src/images/*', { encoding: false }).pipe(optimizeImages()).pipe(gulp.dest('dist/images'))
})

// Figma exports -> WebP, ready to upload to WordPress
// Drop PNG/JPGs into src/figma/, collect the .webp files from dist/figma/
// Files ending in PX (e.g. Archive-IndexPX.png) are the pixelated hover previews:
// they're kept lossless and resized with 'nearest' so the pixel blocks stay crisp
var WEBP_MAX_WIDTH = 1920 // px – wide enough for retina desktop and 3x phones
var WEBP_QUALITY = 80 // 0–100 – 80 is visually lossless for most images

function convertToWebP() {
	return new Transform({
		objectMode: true,
		transform(file, enc, done) {
			if (!file.isBuffer()) return done(null, file)
			var isPixelated = /PX$/.test(file.stem)
			sharp(file.contents)
				.resize({
					width: WEBP_MAX_WIDTH,
					withoutEnlargement: true, // shrinks larger exports, never upscales
					kernel: isPixelated ? 'nearest' : 'lanczos3', // nearest = no smoothing between blocks
				})
				.webp(isPixelated ? { lossless: true } : { quality: WEBP_QUALITY })
				.toBuffer()
				.then(function (buf) {
					var before = file.contents.length
					file.contents = buf
					file.extname = '.webp' // Hero.png -> Hero.webp
					console.log('webp: ' + file.basename + ' ' + Math.round(before / 1024) + 'KB -> ' + Math.round(buf.length / 1024) + 'KB')
					done(null, file)
				}, done)
		},
	})
}

gulp.task('webp', function () {
	return gulp
		.src('src/figma/*.{png,jpg,jpeg}', { encoding: false, since: gulp.lastRun('webp') }) // only files added/changed since the last run
		.pipe(convertToWebP())
		.pipe(gulp.dest('dist/figma'))
})

// Sets up a function called watch(), containing the gulp.watch method
gulp.task('watch', function () {
	browserSync.init({ server: { baseDir: 'dist' } })
	// HTML Watchers
	gulp.watch('src/*.html', gulp.series('html')).on('change', browserSync.reload)

	// JS Watchers
	gulp.watch(['src/js/*.js'], gulp.series('singlePageJS')).on('change', browserSync.reload)

	gulp.watch('src/js/currentPage.js', gulp.series('currentPage')).on('change', browserSync.reload)

	gulp.watch('src/js/sequencerMod.js', gulp.series('sequencerJS')).on('change', browserSync.reload)

	// CSS / .SCSS Watchers
	gulp.watch('src/css/app.scss', gulp.series('compileCSS')).on('change', browserSync.reload)
	gulp.watch('src/css/designTokens.css', gulp.series('compileCSS')).on('change', browserSync.reload)
	gulp.watch('src/css/modules/*.scss', gulp.series('compileCSS')).on('change', browserSync.reload)
	gulp.watch('src/css/modules/partials/*.scss', gulp.series('compileCSS')).on('change', browserSync.reload)

	gulp.watch('src/css/typography.scss', gulp.series('compileTypeCSS'))

	// Misc Watchers
	gulp.watch('src/fonts/*', gulp.series('fonts'))
	gulp.watch('src/img/*', gulp.series('images'))
	gulp.watch('src/figma/*', gulp.series('webp'))
})

gulp.task(
	'default',
	gulp.parallel('html', 'compileCSS', 'compileTypeCSS', 'singlePageJS', 'currentPage', 'sequencerJS', 'fonts', 'images', 'webp', 'watch')
)
