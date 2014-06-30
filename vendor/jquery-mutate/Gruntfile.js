module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		copy: {
			build: {
				cwd: 'source',
				src: [ 'js/*.js', '!js/*.min.js'],
				dest: 'build',
				expand: true
			},
		},
		clean: {
			build: {
				src: [ 'js/*.min.js']
			}
		},
		uglify: {
			options: {
        banner: "/* @license ! <%= pkg.name %> - v<%= pkg.version %> - \n" +
          "* Licensed under the MIT license\n" +
          "* http://www.opensource.org/licenses/mit-license.php\n" +
          "* Date: <%= grunt.template.today('yyyy-mm-dd') %> */\n\n" 
      },
			files: { 
				src: 'js/*.js',  // source files mask
				dest: 'js/',     // destination folder
				expand: true,    // allow dynamic building
				flatten: true,   // remove all unnecessary nesting
				ext: '.min.js'   // replace .js to .min.js
			}
		},
		watch: {
				js:  { files: ['js/*.js','!js/*.min.js'], tasks: ['clean:build', 'copy', 'uglify', 'watch' ] },
		}
	});

	// load plugins
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// register at least this one task
	grunt.registerTask('default', 'watch');
};