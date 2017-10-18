'use strict';

module.exports = function (gulp, gulpconfig, gulpDeps) {
	return function(){
		gulp.watch(gulpconfig.sassfiles_sourcepath, gulpDeps);
	}
};
