module.exports = function () {
  $.gulp.task('serve', function () {
    $.bs.init({
      server: {
        baseDir: "./build",
        index: "index.html"
      },
      watchOptions: {
        ignoreInitial: true,
        ignored: '*.txt'
      },
      files: ['./build']
    });
  });
}
