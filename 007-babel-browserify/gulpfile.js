"use strict";
var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function () {
    browserify({
        entries: './src/my-file.js'
    })
    .transform(babelify)
    .bundle()
    .pipe(source("myfile.js"))
    .pipe(gulp.dest("./dest"));
});




























