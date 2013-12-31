## grunt-notify [![NPM version](https://badge.fury.io/js/grunt-notify.png)](http://badge.fury.io/js/grunt-notify)  [![Build Status](https://travis-ci.org/dylang/grunt-notify.png)](https://travis-ci.org/dylang/grunt-notify) [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)  [![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/dylang/grunt-notify/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

> Automatic desktop notifications for Grunt errors and warnings using Growl for OS X or Windows, Mountain Lion and Mavericks Notification Center, and Notify-Send.


### Getting Started

This plugin recommends Grunt `0.4.1` or newer.

### Installing

```bash
npm install grunt-notify --save-dev
```

Once that's done, add this line to your project's `Gruntfile.js`:

```js
grunt.loadNpmTasks('grunt-notify');
```


**That's all you need for automatic notifications.**

### Screenshots

##### OS X

| ![notification-center-jshint](https://f.cloud.github.com/assets/51505/982681/4e63bf88-0814-11e3-8b57-e2f5f4c2e1c1.png) ![notification-center-sidebar-jshint](https://f.cloud.github.com/assets/51505/982683/519b3bc2-0814-11e3-9b2b-1b07b4cf0466.png) |
|:-------------:|
| OS X Notification Center |

| ![growl-jshint](https://f.cloud.github.com/assets/51505/982676/43c372da-0814-11e3-89e5-0cb0f45f50e1.png) |
|:-------------:|
| Growl for Mac |

##### Windows

| ![growl-nodeunit](https://f.cloud.github.com/assets/51505/982679/4a199542-0814-11e3-93d9-5c46e2aed2d3.png) |
|:-------------:|
| Growl for Windows |

| ![snarl-nodeunit](https://f.cloud.github.com/assets/51505/982685/5419c058-0814-11e3-8976-54a811f21c92.png) |
|:-------------:|
| Snarl |

##### Linux

| ![notify-send - jshint](https://f.cloud.github.com/assets/51505/1030946/056631f4-0ecb-11e3-97cb-46e12c484f8b.png) |
|:-------------:|
| Notify-Send |


### Notify_Hooks Options

If you want change the automatic messaging configure a task called `notify_hooks`.

```js
grunt.initConfig({
  // This is optional!
  notify_hooks: {
    options: {
      enabled: true,
      max_jshint_notifications: 5, // maximum number of notifications from jshint output
      title: "Project Name" // defaults to the name in package.json, or will use project directory's name
    }
  }
});

// Load the task
grunt.loadNpmTasks('grunt-notify');

// This is required if you use any options.
grunt.task.run('notify_hooks');
```


### Showing Specific Notifications

Sometimes you want to show messages like "Uglify complete" or "Project Deployed" - that's easy to do too.

![growl-deploy](https://f.cloud.github.com/assets/51505/982678/48b6fa82-0814-11e3-890e-82518408084a.png)
![notification-center-deploy](https://f.cloud.github.com/assets/51505/982680/4b9df1ba-0814-11e3-88a4-0736f22dedf6.png)
![notify-send custom](https://f.cloud.github.com/assets/51505/1030945/038e46dc-0ecb-11e3-9915-80c1838624a8.png)

```js
grunt.initConfig({
  notify: {
    task_name: {
      options: {
        // Task-specific options go here.
      }
    },
    watch: {
      options: {
        title: 'Task Complete',  // optional
        message: 'SASS and Uglify finished running', //required
      }
    },
    server: {
      options: {
        message: 'Server is ready!'
      }
    }
  }
});

grunt.loadNpmTasks('grunt-notify');

// simplified example
grunt.registerTask('server', [
  'uglify',
  'sass',
  'server',
  'notify:server'
  ]);
```

#### Options
* `title` _optional_ Notification title
* `message` _required_ Notification message



### Tests

Run `grunt` to lint and run the tests.


### Notifications aren't showing

Run `grunt --debug` to show `grunt-notify` debug messages. Create an issue and I'll look into it asap.

### Terminal Notifier

Apple does not provide an API to the OS X Notification Center that Node can access. Only code written in Objective C and signed in XCode can use it.
This is not very friendly for Node users so we are using the tiny signed MIT-licensed native application
[Terminal Notifier](https://github.com/alloy/terminal-notifier) from [Eloy Durán](https://github.com/alloy).
I've changed the default icon which is owned by Apple to the Grunt logo.






### About the Author

Dylan is a tech lead at Opower, co-creator of Doodle or Die, and father of two awesome kids.

Here are some other Node modules Dylan has created.

| Name | Description | Github Stars | Npm Installs |
|---|---|--:|--:| 
 | [grunt](https://github.com/dylang/grunt) | Grunt: The JavaScript Task Runner | 0 | 0 | 
 | [grunt-attention](https://github.com/dylang/grunt-attention) | Display attention-grabbing messages in the terminal. | 0 | 0 | 
 | [grunt-cat](https://github.com/dylang/grunt-cat) | Echo a file to the terminal. Works with text, figlets, ascii art, and full-color ansi. | 0 | 0 | 
 | [grunt-contrib-uglify](https://github.com/dylang/grunt-contrib-uglify) | Minify files with UglifyJS. | 0 | 0 | 
 | [grunt-eslint](https://github.com/dylang/grunt-eslint) | Validate files with ESLint | 0 | 0 | 
 | [grunt-lib-contrib](https://github.com/dylang/grunt-lib-contrib) | Common functionality shared across grunt-contrib tasks. | 0 | 0 | 
 | [grunt-parallel](https://github.com/dylang/grunt-parallel) | Run commands and tasks as child processes! | 0 | 0 | 
 | [grunt-prompt](https://github.com/dylang/grunt-prompt) | Add interactive UI to your Gruntfile such as lists, checkboxes, text input with filtering, and password fields, all on the command line. | 0 | 0 | 
 | [grunt-readme](https://github.com/dylang/grunt-readme) | Generate your README from a template. Extremely fast, very little config, and if you already use Grunt it's a no-brainer. | 0 | 0 | 
 | [load-grunt-config](https://github.com/dylang/load-grunt-config) | Grunt plugin that lets you break up your Gruntfile config by task | 0 | 0 | 
 | [time-grunt](https://github.com/dylang/time-grunt) | Displays the elapsed execution time of grunt tasks - Node.js module | 0 | 0 |

_Data compiled on Tuesday, December 17, 2013, using anthology._


### License
Copyright (c) 2013 Dylan Greene, contributors.
Released under the MIT license

***
_This file was generated by [grunt-readme](https://github.com/assemble/grunt-readme) on Tuesday, December 17, 2013._




