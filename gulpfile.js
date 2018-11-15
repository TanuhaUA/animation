var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');

gulp.task('sass', function() {
  return gulp.src('src/scss/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('public/css'));
});

gulp.task('moveHTML', function () {
  return gulp.src('src/index.html')
    .pipe(gulp.dest('public'));
});

gulp.task('watchHTML', function() {
  gulp.watch('src/index.html', ['moveHTML']);
});

gulp.task('watchCSS', function() {
  gulp.watch('src/scss/**/*.scss', ['sass']);
});

gulp.task('w', ['watchHTML', 'watchCSS']);
