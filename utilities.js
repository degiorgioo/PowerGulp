'use strict';
var gulp = require('gulp');
var gulpconfig = require('./gulp-config');

function getTask(taskname){
	return require(gulpconfig.taskspath + taskname)(gulp, gulpconfig);
}

module.exports = {
	getTask: getTask
};