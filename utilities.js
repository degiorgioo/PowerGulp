'use strict';
var gulp = require('gulp');
var gulpconfig = require('./gulp-config');

function getTask(taskname, gulpDeps){
	if(gulpDeps){
		return require(gulpconfig.taskspath + taskname)(gulp, gulpconfig, gulpDeps);
	}else{
		return require(gulpconfig.taskspath + taskname)(gulp, gulpconfig);
	}
}

module.exports = {
	getTask: getTask
};