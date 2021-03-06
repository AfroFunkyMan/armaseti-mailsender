var gulp = require('gulp');//
var pug = require('gulp-pug');
var changed = require('gulp-changed');//
var sass = require('gulp-sass');//
var postcss    = require('gulp-postcss');//
var sourcemaps = require('gulp-sourcemaps');

gulp.task('pug', function () {
    return gulp.src('src/**/*.pug')
        .pipe(changed('src', {extension: '.html'}))
        .pipe(pug())
        .pipe(gulp.dest('src'))
});

gulp.task('style', function () {
    return gulp.src('src/**/*.sass')
        .pipe(changed('src',{extension: '.css'}))
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe( postcss([ require('postcss-fixes'), require('autoprefixer'), require('rucksack-css'),require('oldie'), require('cssnano')] ))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('src'));
});


gulp.task('serve', ['style', 'pug'], function() {
    gulp.watch("src/**/*.sass", ['style']);
    gulp.watch("src/**/*.pug", ['pug']);
});

gulp.task('default', ['serve']);
