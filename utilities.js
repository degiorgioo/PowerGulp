'use strict';
var gulp = require('gulp');
var gulpconfig = require('./gulp-config');

function getTask(taskname, gulpDeps) {
	return require(gulpconfig.taskspath + taskname)(gulp, gulpconfig, gulpDeps);
}

module.exports = {
	getTask: getTask
};