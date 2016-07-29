// ==================================================
// Load Modules
// ==================================================

var gulp       = require('gulp'),
    gnotify    = require('gulp-notify');

// ==================================================
// Load Configurations
// ==================================================

var build         = require('../configs/build')(),
    paths         = require('../configs/paths')(),
    notifications = require('../configs/notifications');

// ==================================================
// Tasks
// ==================================================

gulp.task('watch', function() {

    // Images
    gulp.watch('**/*', {cwd: paths.src.images}, ['images', function() {
        if (notifications.enabled) {
            gulp.src('.').pipe(gnotify({
                sound: notifications.sound,
                icon: './node_modules/gulp-notify/assets/gulp.png',
                message: notifications.msgImg
            }));
        }
    }]);

    // Styles
    gulp.watch(paths.src.base + 'leaves/styles/**/*.scss', ['styles', function() {
        if (notifications.enabled && !build.hasError) {
            gulp.src('.').pipe(gnotify({
                sound: notifications.sound,
                icon: './node_modules/gulp-notify/assets/gulp.png',
                message: notifications.msgSass
            }));
        }

        build.hasError = false;  // reinit variable before next watch task
    }]);

    // Scripts
    gulp.watch(paths.src.base + 'leaves/scripts/**/*.js', ['scripts', function() {
        if (notifications.enabled && !build.hasError) {
            gulp.src('.').pipe(gnotify({
                sound: notifications.sound,
                icon: './node_modules/gulp-notify/assets/gulp.png',
                message: notifications.msgJs
            }));
        }

        build.hasError = false;
    }]);

    // Fonts
    gulp.watch('**/*', {cwd: paths.src.fonts}, ['fonts', function() {
        if (notifications.enabled) {
            gulp.src('.').pipe(gnotify({
                sound: notifications.sound,
                icon: './node_modules/gulp-notify/assets/gulp.png',
                message: notifications.msgFonts
            }));
        }
    }]);

    // Gui
    gulp.watch('**/*', {cwd: paths.src.gui}, ['gui', function() {
        if (notifications.enabled) {
            gulp.src('.').pipe(gnotify({
                sound: notifications.sound,
                "icon": './node_modules/gulp-notify/assets/gulp.png',
                message: notifications.msgGui
            }));
        }
    }]);

    gulp.watch(paths.src.base + 'ground/**/*', ['build', function() {
        if (notifications.enabled && !build.hasError) {
            gulp.src('.').pipe(gnotify({
                sound: notifications.sound,
                "icon": './node_modules/gulp-notify/assets/gulp.png',
                message: notifications.msgGuiSass
            }));
        }

        build.hasError = false;
    }]);
});
