'use strict';

module.exports = function (gulp, gulpconfig) {
	return function(){
		gulp.watch(gulpconfig.sassfiles_sourcepath);
	}
};
