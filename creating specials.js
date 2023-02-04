gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "app"
    }
  })
});
