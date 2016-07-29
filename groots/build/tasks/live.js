// ==================================================
// Load Modules
// ==================================================

var gulp       = require('gulp'),
    livereload = require('gulp-livereload'),
    gnotify    = require('gulp-notify');

// ==================================================
// Load Configurations
// ==================================================

var project       = require('../../config'),
    build         = require('../configs/build')(),
    paths         = require('../configs/paths')(),
    images        = require('../configs/images'),
    notifications = require('../configs/notifications');

var liveFiles = [
   paths.public.styles + '**/*.css',
   paths.public.scripts + '**/*.js',
   paths.public.images + '**/*.{'+ images.extensions +'}',
   paths.public.gui + '**/*.{html,php}'
];

if (project.type === 'craft') liveFiles.push('./craft/templates/**/*.{html,twig}');
if (project.type === 'wordpress') liveFiles.push(paths.public.base  + '**/*.{html,php}');

// ==================================================
// Tasks
// ==================================================

gulp.task('live', ['watch'], function() {
    gulp.watch(liveFiles, function(file) {
        var filename = file.path.split("/").pop();

        livereload.changed(filename);

        if (notifications.enabled && !build.hasError) {
            gulp.src('.').pipe(gnotify({
                sound: notifications.sound,
                "icon": './node_modules/gulp-notify/assets/gulp.png',
                message: filename + ' reloaded'
            }));
        }
    });

    livereload.listen();
});
