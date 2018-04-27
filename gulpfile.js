"use strict";

var gulp = require("gulp"),
    sass = require("gulp-sass");

gulp.task("sass", function () {
    return gulp.src([
        "style/**/*.scss"
    ])
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest("style"))
});


// watch
gulp.task("watch", function () {
    gulp.watch("style/**/*.scss", ["sass"]);
});

gulp.task("default", ["watch", "sass"]);
