let gulp = require('gulp'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    changed = require('gulp-changed'),
    connect = require('gulp-notify'),
    browserSync = require('browser-sync'),
    path = require('path');

let src = {
  'root': './src',
  'pug': './src/pug/*.pug',
  'scss': './src/sass/*.scss'
};

gulp.task('default', ['server_start', 'watch_files']);

// 仮想のWebサーバーを立てます
gulp.task('server_start', function(){
  connect.server({
    root: './',
    livereload: true
  })
});

gulp.task('watch_files', function(){
  gulp.watch(src.pug, ['change_pug']);
  gulp.watch(src.scss, ['change_scss']);
})
