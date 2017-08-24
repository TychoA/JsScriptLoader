module.exports = function (grunt) {

	// set config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// set up uglifier
		uglify: {
			build: {
				files: {
					'public/minified.min.js' : 'public/js/*.js'
				}
			}
		},
		// set up sass compiler
		sass: {
			dist: {
				options: {
					style: 'compact'
				},
				files: {
					'./public/main.css' : './public/scss/main.scss'
				}
			}
		}
	});

	// load tasks
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');

	// set default task
	grunt.registerTask('default', ['uglify', 'sass']);
};