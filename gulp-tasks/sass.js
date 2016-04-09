var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
$.changed = require('gulp-changed');
$.scsslint = require('gulp-scss-lint');
$.sass = require('gulp-sass');
$.plumber = require('gulp-plumber');
$.autoprefixer = require('gulp-autoprefixer');
$.csso = require('gulp-csso');
$.concat = require('gulp-concat');
$.size = require('gulp-size');

var scssSrc = './src/assets/stylesheet/bundle.scss',
    scssDst = './dist/assets/stylesheet/';

module.exports = function () {
  return gulp.src(scssSrc)
    .pipe($.changed(scssDst))
    .pipe($.plumber({
      errorHandler: function (err) {
        console.log(err);
        this.emit('end');
      }
    }))
    .pipe($.scsslint())
    .pipe($.sass())
    .pipe($.autoprefixer())
    .pipe($.concat('bundle.css'))
    .pipe($.csso())
    .pipe($.size({title: 'SASS'}))
    .pipe(gulp.dest(scssDst));
};
