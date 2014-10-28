function GruntTasks (grunt) {
	'use strict';

	grunt.initConfig({
		clean: {
			coverage: [
				'spec/coverage'
			]
		},
		copy: {
			package: {
				src: 'package.json',
				dest: 'spec/coverage/instrument/package.json'
			}
		},
		instrument: {
			files: [
				'lib/**/*.js',
				'index.js'
			],
			options: {
				basePath: 'spec/coverage/instrument/',
				lazy: false
			}
		},
		jasmine_node: {
			options: {},
			spec: [
				'spec/'
			]
		},
		storeCoverage: {
			options: {
				dir: 'spec/coverage/reports'
			}
		},
		makeReport: {
			src: 'spec/coverage/reports/**/*.json',
			options: {
				type: 'lcov',
				dir: 'spec/coverage/reports',
				print: 'detail'
			}
		}
	});

	require('load-grunt-tasks')(grunt);

	grunt.registerTask('test', [
		'clean:coverage',
		'instrument',
		'copy:package',
		'jasmine_node:spec',
		'storeCoverage',
		'makeReport'
	]);
}

module.exports = GruntTasks;
