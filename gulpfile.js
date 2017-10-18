'use strict';

//imports for gulp tasks
var gulp = require('gulp');

//import and variables for loocal files
var gulpconfig = require('./gulp-config');
var sassTask = require('./tasks/sass');
var defaultTask = require('./tasks/default');

gulp.task('default', defaultTask(gulp, gulpconfig));
gulp.task('sass', sassTask(gulp, gulpconfig));