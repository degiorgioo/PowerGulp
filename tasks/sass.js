'use strict';

var sass = require('gulp-sass');

module.exports = function(gulp, gulpconfig){
	return function() {
		return gulp.src(gulpconfig.sassfiles_sourcepath)
			.pipe(sass().on('error', sass.logError))
			.pipe(gulp.dest(gulpconfig.css_destinationpath));
	};
};