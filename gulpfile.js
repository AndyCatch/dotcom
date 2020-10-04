// gulpfile.js
var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass", function () {
  return (
    gulp
      .src("css/app.scss")

      // Saves compiled CSS to chosen folder
      .pipe(gulp.dest("master.css"))
  );
});

gulp.task("watch", function () {
  gulp.watch("css/app.scss", gulp.series("sass"));
});
