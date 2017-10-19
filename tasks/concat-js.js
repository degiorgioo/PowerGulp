var concat = require('gulp-concat');

module.exports = function(gulp, gulpconfig) {
	return function(){
		gulp.src(gulpconfig.javascript_files)
			.pipe(concat(gulpconfig.filename_destination_js))
			.pipe(gulp.dest(gulpconfig.foldername_destination_js));
	}
};