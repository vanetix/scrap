module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      banner: '/**\n' +
              ' * <%= pkg.name %>\n' +
              ' * v<%= pkg.version %>\n' +
              ' *\n' +
              ' * <%= grunt.template.today("mm/dd/yy") %>\n' +
              ' */\n\n'
    },

    clean: {
      release: ['dist/']
    },

    jshint: {
      all: ['Gruntfile.js', 'dist/*.js', 'test/*.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    includes: {
      options: {
        banner: '<%= meta.banner %>'
      },
      release: {
        src: ['src/<%= pkg.name %>.core.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },

    uglify: {
      options: {
        banner: '<%= meta.banner %>'
      },
      release: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= includes.release.dest %>']
        }
      }
    }

  });

  // Load tasks
  grunt.loadNpmTasks('grunt-includes');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Define our default tasks
  grunt.registerTask('release', ['clean', 'includes', 'jshint', 'uglify']);
  grunt.registerTask('default', ['release']);
};