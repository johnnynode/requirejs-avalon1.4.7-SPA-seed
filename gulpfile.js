//引入插件
var gulp = require('gulp');
var connect = require('gulp-connect');
var proxy = require('http-proxy-middleware');
var plumber = require('gulp-plumber');
var process = require('process');
var sh = require('shelljs');
var runSequence = require('run-sequence');

// 需要监控的路径
var watchPath = ['images', 'js', 'lib', 'pages', 'index.css', 'index.html', 'main.js', '!./node_modules'];

// 使用connect启动一个Web服务器
gulp.task('connect', function () {
    connect.server({
        root: '',
        livereload: true,
        port: 9000,
        middleware: function (connect, opt) {
            return [
                // 下面这段代码是用来做跨域请求用的，target中填写自己的跨域地址, 本项目暂未使用到，只作一个演示
                // proxy(["/api"], {
                //     target: '',
                //     changeOrigin: true,
                //     pathRewrite: {
                //         '^/api': '/'
                //     }
                // })
            ]
        }
    });
});

// 监控文件的变动
gulp.task('watch', function () {
    gulp.watch(watchPath, ['watchCallback']);
});

// 监控的回调reload
gulp.task('watchCallback', function () {
    gulp.src(watchPath)
        .pipe(plumber())
        .pipe(connect.reload());
});

// 打开浏览器
// 关于windows下(如在IE6下)的提示：start找不到[http://localhost:9000]文件
// 解决方案是：打开IE6浏览器(一个空白页)之后再执行gulp任务
gulp.task('open-browser', function () {
    var platform = process.platform;
    var shellStr1 = "open -a '/Applications/Google Chrome.app' 'http://localhost:9000'";
    var shellStr2 = "start http://localhost:9000";
    // 打开浏览器方法：
    var openFunc = function (str, flag) {
        // 执行并对异常处理
        if (sh.exec(str).code !== 0) {
            sh.echo(flag + '下打开浏览器失败,建议您安装chrome并设为默认浏览器!');
            sh.exit(1);
        }
    };
    if (platform === 'darwin') {
        openFunc(shellStr1, 'Mac');
    } else if (platform === 'win32' || platform === 'win64') {
        openFunc(shellStr2, 'Windows');
    } else {
        sh.echo('现在只支持Mac和windows系统!如果未打开页面，请确认安装chrome并设为默认浏览器!');
    }
});

//运行Gulp时,开启服务器
gulp.task('server', function () {
    sh.echo("服务器开启!");
    runSequence(['connect', 'watch'], function () {
        sh.echo('将要打开浏览器访问：http://localhost:9000');
        sh.exec('gulp open-browser');
    });
});
