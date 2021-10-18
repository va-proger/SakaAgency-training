module.exports = function () {
  $.gulp.task('scripts:lib', function () {
    return $.gulp.src('src/static/libs/**/*')
      .pipe($.gulp.dest('build/js/libs/'))
      .pipe($.bs.reload({
        stream: true
      }));
  });
  // Перенос файла common.js в папку build
  $.gulp.task('scripts', function () {
    return $.gulp.src('src/static/js/common.js')
      .pipe($.gulp.dest('build/js/'))
      .pipe($.bs.reload({
        stream: true
      }));
  });

};
