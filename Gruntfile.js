module.exports = function(grunt) {

  // Project configuration.
    grunt.initConfig({
      sass: {
        dist: {
          files: {
            'styles/main.css': 'styles/main.scss'
          }
        }
      }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');


};
