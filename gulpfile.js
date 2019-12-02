var gulp = require("gulp");
// var concatCss = require("gulp-concat-css");
var ftp = require("gulp-ftp");
var gutil = require("gulp-util");

// gulp.task("default", function() {
//   return gulp
//     .src("src/css/*.css")
//     .pipe(concatCss("style.css"))
//     .pipe(gulp.dest("src/css"));
// });

gulp.task("ftp", function() {
  return gulp
    .src("src/**")
    .pipe(
      ftp({
        host: "a300745.ftp.mchost.ru",
        user: "a300745_tsp",
        pass: "32585Vv2",
        remotePath: "httpdocs/"
      })
    )
    .pipe(gutil.noop());
});
