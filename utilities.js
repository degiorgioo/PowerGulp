'use strict';
var gulp = require('gulp');
var gulpconfig = require('./gulp-config');

/**
 * This function searches in the gulpconfig.taskpath-folder a '.js'-file named as the param
 * given on function-call.
 *
 * @param taskname
 * @param gulpDeps
 * @returns A Method-Object with the params: gulp, gulpconfig and gulpDeps injected.
 */
function getTask(taskname, gulpDeps) {
	return require(gulpconfig.taskspath + taskname)(gulp, gulpconfig, gulpDeps);
}

module.exports = {
	getTask: getTask
};