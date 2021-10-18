module.exports = function () {
  $.gulp.task('resources', function () {
    return $.gulp.src('./src/static/resources/**')
      .pipe($.gulp.dest('./build'))
  });
}

