var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var htmlmin = require('gulp-htmlmin');
var cssnano = require('gulp-cssnano');

// task for vendor
gulp.task('script',function () {
    gulp.src('app/vendor/js/*.js')
        .pipe(concat('index.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/vendor/js'))
});

// task for controller
gulp.task('controllerscript',function () {
    gulp.src('app/controller/*.js')
        .pipe(concat('index.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/controller'))
});

// task to minify home page html
gulp.task('homepageminify',function () {
    gulp.src('app/partial/homepage.html')
        .pipe(htmlmin({collapseWhitespace:true}))
        .pipe(gulp.dest('app/partial'))
});

// task to minify jquery
gulp.task('jqueryminify',function () {
   gulp.src('app/assets/js/jquery.min.js')
       .pipe(uglify())
       .pipe(gulp.dest('app/assets/js'))
});

// task to minify bootstrap.min.js
gulp.task('bootstrapminjs',function () {
   gulp.src('app/assets/js/bootstrap.min.js')
       .pipe(uglify())
       .pipe(gulp.dest('app/assets/js'))
});

// task to minify bootstrap.min.css
gulp.task('bootstrapmincss',function () {
   gulp
       .src('app/assets/css/bootstrap.min.css')
       .pipe(cssnano())
       .pipe(gulp.dest('app/assets/css'))
});