
// https://www.viget.com/articles/gulp-browserify-starter-faq
// npm install --save-dev gulp
// npm install --save-dev vinyl-source-stream




// gulp file.
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');


// sample.
gulp.task('sample', function () {
    console.log('gulp sample task.');
});

// browserify.
// var bundle = browserify('./main.js').bundle();
// console.log(bundle);

// browserify and gulp.
gulp.task('browserify', function () {
    return browserify('./main.js')
            .bundle()
            .pipe(source('bundle.js'))
            .pipe(gulp.dest('./dist/'));
});


// watch.
gulp.task('watch', function () {
    gulp.watch(['./*.js'], ['browserify']);
});