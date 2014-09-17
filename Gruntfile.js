module.exports = function (grunt) {
    grunt.initConfig ({
	pkg: grunt.file.readJSON('package.json'),

	jshint : {
	    files : ['Gruntfile.js', 'src/**/*.js','test/**/*.js'],
	},

	mochacov : {
	    coverage : {
		options : {
		    coveralls : true
		}
	    },
	    test : {
		options : {
		    reporter : "spec"
		}
	    },
	    options : {
		files : 'test/**/*.js'
	    }
	},

	mochaTest : {
	    test : {
		options : {
		    reporter : "spec"
		},
		src : ['test/**/*.js']
	    }
	}

    });

    grunt.loadNpmTasks ('grunt-contrib-jshint');
    grunt.loadNpmTasks ('grunt-mocha-cov');
    grunt.loadNpmTasks ('grunt-mocha-test');

    grunt.registerTask ('default', 'test');
    grunt.registerTask ('test', ['jshint', 'mochaTest']);
};
