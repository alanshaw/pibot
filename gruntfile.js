module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Create the html files from page layouts and partial html fragments
    
    copy: {
      dist: {
        files: [{dest: 'dist/', src: '**', expand: true, cwd: 'src/static/'}]
      }
    },

    assemble: {
      options: {
        assets: 'dist/',
        layout: 'src/layouts/layout.hbs',
        partials: ['src/partials/*.hbs'],
        helpers: ['src/helpers/*'],
        data: 'src/data/*.json'
      },
      pages: {
        files:[{expand: true, cwd: 'src/pages/', src: '**/*.hbs', dest: 'dist', ext: '.html'}]
      }
    },

    // Watch JS, LESS & HTML files for changes, copy & compile but not minify for easy debug during dev
    watch: {
      project: {
        options: {livereload: true},
        files: 'src/**',
        tasks: ['copy', 'assemble']
      }
    }
  });

  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['copy', 'assemble']);
};
