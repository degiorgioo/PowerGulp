'use strict';

var gulp = require('gulp');
var getTask = require('./utilities').getTask;

gulp.task('default', getTask('default'));
gulp.task('sass', getTask('sass'));
gulp.task('watch-sass', getTask('watch-sass', ['sass']));
gulp.task('concat-js', getTask('concat-js'));
