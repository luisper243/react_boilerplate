module.exports = function(config) {
	'use strict';
  	config.set({
		basePath: '',
		frameworks: ['mocha', 'chai'],
		files: [
			'src/**/*spec.js'
		],
		preprocessors: {
			'src/**/*.js': ['webpack']
		},
		webpack: require("./webpack.config.js"),
		webpackMiddleware: {
			stats: "errors-only"
		},
		reporters: ['mocha'],
		mochaReporter: {
			showDiff: true
		},
		port: 9876,
		colours: true,
		autoWatch: true,
		singleRun: false,
		logLevel: config.LOG_INFO,
		browsers: ['Chrome'],
		chrome_without_security: {
			base: 'Chrome',
			flags: ['--disable-web-security'],
			displayName: 'Chrome w/o security'
		}
	})
};