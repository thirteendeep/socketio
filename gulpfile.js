'use strict';

//require('es6-promise').Promise; // compatibility with older node versions

var gulp        = require('gulp'),
    gnotify     = require('gulp-notify'),
    gutil       = require('gulp-util'),
    runSequence = require('run-sequence'),
    fs          = require('fs');

// ==================================================
// Configurations
// ==================================================

var base = './groots/build/';

var project       = require('./groots/config'),
    build         = require(base + 'configs/build')(),
    paths         = require(base + 'configs/paths')(),
    notifications = require(base + 'configs/notifications');

// ==================================================
// Individual Tasks
// ==================================================

require(base + 'tasks/styles');
require(base + 'tasks/editorconfig');
require(base + 'tasks/watch');
require(base + 'tasks/live');

// ==================================================
// Bundle Tasks
// ==================================================

var tasks = [];

// Default tasks
tasks.default = [];
tasks.default.push('styles');
if (project.gui) tasks.default.push('gui');

// Build tasks
tasks.build = [];
tasks.build = tasks.build.concat(tasks.default);


try {
    fs.accessSync(paths.src.base + 'favicon/favicon.png', fs.F_OK);
    tasks.build.push('favicons');
} catch(e) {
    // Favicons task will throw error if no source png
}

if (project.gui) tasks.build.push('gui:build');

// Register tasks
gulp.task('default', tasks.default, function() {
    if (notifications.enabled && !build.isProd && !build.isStage && !build.hasError) {
        gulp.src('.').pipe(gnotify({
            sound: notifications.sound,
            'icon': './node_modules/gulp-notify/assets/gulp.png',
            message: notifications.msgDev
        }));
    }
});

gulp.task('build', tasks.build);

gulp.task('initial', ['build']);
