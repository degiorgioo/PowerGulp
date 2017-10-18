'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var gulpconfig = require('./gulp-config');

gulp.task('default', function() {
	// place code for your default task here
});

gulp.task('sass', function () {
	return gulp.src(gulpconfig.sassfiles_sourcepath)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(gulpconfig.css_destinationpath));
});