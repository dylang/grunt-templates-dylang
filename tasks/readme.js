'use strict';

// only needed until grunt-readme doesn't require it's own grunt
var grunt = require('grunt');
grunt.template.addDelimiters('readme', '{%', '%}');

//comma-it

module.exports = function (grunt) {

  var path = require('path');

  var config = {
    options: {
      docs: 'templates',
      templates: 'node_modules/grunt-templates-dylang',
      alt: {
        src: ['templates/README.tmpl.md'],
        dest: './'
      },
      metadata: [
        path.join(__dirname, '../data/repos.json'),
        {'commaIt': require('humanize-number')}
      ]
    }
  };

  grunt.config('readme', config);

  require('grunt-readme/tasks/readme')(grunt);
};