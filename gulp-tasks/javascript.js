var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
$.babel = require('gulp-babel');
$.changed = require('gulp-changed');
$.concat = require('gulp-concat');
$.plumber = require('gulp-plumber');
$.jshint = require('gulp-jshint');
$.uglify = require('gulp-uglify');
$.size = require('gulp-size');

var jsSrc = './src/assets/javascript/**/*.js',
    jsDst = './dist/assets/javascript/';

module.exports = function () {
  return gulp.src(jsSrc)
    .pipe($.changed(jsDst))
    .pipe($.plumber({
      errorHandler: function (err) {
        console.log(err);
        this.emit('end');
      }
    }))
    .pipe($.jshint())
    .pipe($.jshint.reporter('default'))
    .pipe($.babel({ presets: ['es2015'] }))
    .pipe($.concat('bundle.js'))
    .pipe($.uglify())
    .pipe($.size({title: 'JS'}))
    .pipe(gulp.dest(jsDst));
};
