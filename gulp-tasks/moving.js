var gulp = require('gulp');


var mSrc = './src/assets/*.txt',
    mDst = './dist/';

module.exports = function () {
   return gulp.src(mSrc)
   .pipe(gulp.dest(mDst));
};
