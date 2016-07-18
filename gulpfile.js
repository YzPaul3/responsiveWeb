// 加载插件
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// 静态服务器 + 监听 scss/html 文件
gulp.task('default', function () {

    browserSync.init({
        server: './src'
    });

    gulp.watch('src/*.html').on('change', browserSync.reload);
});
