module.exports = function(grunt){

	grunt.initConfig({
	    jade: {
	      compile: {
	        options: {
	          pretty: true,
	        },
	        files: {
	          'index.html': 'jade_files/index.jade'
	        }
	      }
	    },
	    watch: {
		  scripts: {
		    files: ['**/*.jade'],
		    tasks: ['jade'],
		    options: {
		      debounceDelay: 1000,
		    },
		  },
		},
		 browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        '**/*.css',
                        '*.html','**/*.js'
                    ]
                },
                options: {
                    watchTask: true,
                    proxy: 'localhost:8080/NewShower/'
                }
            }
        }
	  });

	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.registerTask('default', ['browserSync','watch']);
};
