// gulp modules required
let gulp = require("gulp");
let sass = require("gulp-sass");

// Compile Sass
gulp.task("sass", function () {
  return gulp
    .src("./sass/**/*.scss")
    .pipe(sass({
      outputStyle: "compressed"
    }).on("error", sass.logError))
    .pipe(gulp.dest("./css"));
});

// watch task running
gulp.task("watch", function () {
  gulp.watch("./sass/**/*.scss", ["sass"]);
});