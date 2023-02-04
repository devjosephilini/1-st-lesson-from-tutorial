var gulp = require('gulp'),
  scss = require('gulp-sass'),
  browserSync = require('browser-sync'),
  uglifyjs = require('gulp-uglifyjs'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),
  autoprefixer = require('gulp-autoprefixer');
  
gulp.task('scss', function () {
  return gulp.src('app/scss/**/*.scss')
    .pipe(scss({ outputStyle: 'compressed' }))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 8 versions'],
    }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({ stream: true }))
});
