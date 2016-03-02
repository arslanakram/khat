/*!
 * Khat v0.1 
 * Copyright 2016 Pixelative
 * 
 * @author: Arslan Akram <arslan@pixelative.co>
 */

'use strict';

// Define Dependencies
var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    less = require('gulp-less'),
    premailer = require('gulp-premailer');

// Khat - Compile LESS to CSS
gulp.task('khat-less', function () {
    return gulp.src('app/styles/less/khat.less')
        .pipe(less())
        .pipe(gulp.dest('app/styles/css'))
        .pipe(reload({stream: true}));
});

// Khat - Inline CSS from HTML  - CSS source defined html file
gulp.task('khat-inline', ['khat-less'], function () {
    return gulp.src('app/html/**/*.html')
        .pipe(premailer())
        .pipe(gulp.dest('dist'));
});

// Serve Khat 
gulp.task('serve', ['khat-inline'], function () {
    browserSync({
        server: {
            baseDir: "./dist",
            directory: true
        },
        notify: false,
        debugInfo: false,
        host: 'localhost'
    });
    
    // Watch & Compile Khat
    gulp.watch(['app/html/**/*.html', 'app/styles/less/**/*.less'], ['khat-inline']);
    // Reload HTML each time the files are changed
    gulp.watch('dist/*.html').on('change', reload);
});