/*
 * grunt-notify
 * https://github.com/dylang/grunt-notify
 *
 * Copyright (c) 2013 Dylan Greene
 * Licensed under the MIT license.
 */
'use strict';

module.exports = function gruntTask(grunt) {

  var pkg = require(process.cwd() + '/package.json');
  var repoData;
  grunt.registerTask('repos', function(){
    var done = this.async();

    require('anthology')
      .getModuleStarsForUsername('dylang', ['*', '!' + pkg.name, '!jobvite', '!opower-jobs', '!tramp', '!lean'])
      .then(function(data){
        grunt.config('repoData', data);
          grunt.file.write('repos.json', JSON.stringify({repos: data }, null, 2));
        done();
      })
      .catch(function(err){
        console.log('uncaught error', err, err.stack);
      });
  });

};