//gulpfile.js 代码封装
const gulp = require('gulp');

//任务一：压缩css文件
const cssmin = require('gulp-cssmin');
const autoprefixer = require('gulp-autoprefixer');
/* 
    使用autoprefixer需要 在package.json里面设置浏览器列表
    "browserslist": [
        "last 2 versions",
        "iOS>7",
        "Firefox < 20",
        "last 2 Explorer versions"
    ]
*/
const cssHandler = ()=>{
    return gulp.src('./src/css/*.css')
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css'))
}
//任务二：压缩images文件夹
const imgHandler = ()=>{
    return gulp.src('./src/images/**')
    .pipe(gulp.dest('./dist/images'))
}
//任务三：压缩font文件夹
// const fontmin = require('gulp-fontmin');
const fontHandler = ()=>{
    return gulp.src('./src/font/*.css')
    // .pipe(fontmin({}))
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/font'))
}
//压缩sass文件夹
const sass = require('gulp-sass');
const sassHandler =()=>{
    return gulp.src('./src/sass/*.scss')
    .pipe(sass())
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css'))
}
//任务四：压缩js文件
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
/* 
    下载包的时候,除了gulp-babel还有另外两个包:@babel/core @babel/preset-env
*/
const jsHandler = ()=>{
    return gulp.src('./src/js/*.js')
    .pipe(babel({
        presets:['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}
//任务五：移动lib文件夹
const libHandler = ()=>{
    return gulp.src('./src/lib/*.js')
    .pipe(gulp.dest('./dist/lib'))
}
//任务六：压缩html文件
const htmlmin = require('gulp-htmlmin');
const htmlHandler = ()=>{
    return gulp.src('./src/pages/*.html')
    .pipe(htmlmin({
        collapseWhitespace: true, //压缩空格
        removeAttributeQuotes:true, //移除属性的引号
        collapseBooleanAttributes:true,//把值为布尔值的属性简写
        removeComments:true,//移除注释
        minifyCSS:true,//把页面里面的style标签里面的css样式也去空格
        minifyJS:true,//把页面里的script标签里面的js代码给去空格
    }))
    .pipe(gulp.dest('./dist/pages'))
}
//任务七：开启以dist为根目录的热更新web服务器
const webserver = require('gulp-webserver');
const serverHandler =()=>{
    return gulp.src('./dist')
    .pipe(webserver({
        port:8080,
        open:'./pages/index.html',
        livereload:true,
        proxies:[{
            source:'/weather',
            target:'https://way.jd.com/jisuapi/weather'
        }],
    }))
}
// 任务八:监控src文件夹下面的所有文件
const watchHandler = ()=>{
    gulp.watch('./src/css/*.css',cssHandler);
    gulp.watch('./src/js/*.js',jsHandler);
    gulp.watch('./src/pages/*.html',htmlHandler);
    gulp.watch('./src/images/**',imgHandler);
    gulp.watch('./src/font/*.css',fontHandler);
    gulp.watch('./src/sass/*.scss',sassHandler);
    gulp.watch('./src/lib/**',libHandler)
}
// 任务九:删除dist目录
const del = require('del')
const delHandler = ()=>{
    return del(['./dist'])
}

// 导入默认任务
module.exports.default = gulp.series(
    delHandler,
    gulp.parallel(
        cssHandler,sassHandler,jsHandler,htmlHandler,imgHandler,fontHandler,libHandler
    ),
    serverHandler,
    watchHandler
)