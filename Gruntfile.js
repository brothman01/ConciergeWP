module.exports = function(grunt) {

    grunt.initConfig({
      uglify: {
        options: {
          mangle: false
        },
        my_target: {
          files: {
            'assets/js/input.min.js': ['assets/js/input.js']
          }
        }
      },
      watch: {
        sass: {
          files: ['assets/css/*.scss', 'assets/js/input.js'],
          tasks: ['css'],
          options: {
            livereload: 35729
          }
        },
        all: {
          files: ['**/*.html'],
          options: {
            livereload: true
          }
        }
      },
    
    sass: {
      dev: {
        files: {
           // destination     // source file
          'assets/css/bellhop.css': 'assets/css/bellhop.scss'
                }
              }
            }
          });
  
    // Default task
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('css', ['sass','uglify']);
  
    // Load up tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
  
  };
