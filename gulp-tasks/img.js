var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
$.changed = require('gulp-changed');
$.imagemin = require('gulp-imagemin');
$.size = require('gulp-size');

var imgSrc = './src/assets/img/**/*',
    imgDst = './dist/assets/img';

module.exports = function () {
    return gulp.src(imgSrc)
      .pipe($.changed(imgDst))
      .pipe($.imagemin())
      .pipe($.size({title: 'IMG'}))
      .pipe(gulp.dest(imgDst));
};
