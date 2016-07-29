// ==================================================
// Load Modules
// ==================================================

var gulp        = require('gulp'),
    realFavicon = require('gulp-real-favicon'),
    fs          = require('fs'),
    gnotify     = require('gulp-notify');

// ==================================================
// Load Configurations
// ==================================================

var build         = require('../configs/build')(),
    paths         = require('../configs/paths')(),
    favicons      = require('../configs/favicons')(),
    notifications = require('../configs/notifications');

// ==================================================
// Tasks
// ==================================================

gulp.task('favicons', function() {
    try {
        fs.accessSync(paths.src.base + 'leaves/favicon/favicon.png', fs.F_OK);
    } catch(e) {
        build.hasError = true;
    }

    if (build.hasError && notifications.enabled) {
        gulp.src('.').pipe(gnotify({
            title: 'Error running Gulp',
            sound: notifications.mute ? false : notifications.soundEr,
            icon: './node_modules/gulp-notify/assets/gulp-error.png',
            message: 'Favicon.png is required'
        }));
    }

    realFavicon.generateFavicon({
        masterPicture: favicons.picture,
        dest: favicons.dest,
        iconsPath: '/',
        design: favicons.design,
        settings: {
			scalingAlgorithm: 'Mitchell',
			errorOnImageTooSmall: true
		},
        markupFile: favicons.data
    });
});

gulp.task('favicons:update', function() {
	var currentVersion = JSON.parse(fs.readFileSync(favicons.data)).version;
	realFavicon.checkForUpdates(currentVersion, function(err) {
		if (err) {
			throw err;
		}
	});
});
