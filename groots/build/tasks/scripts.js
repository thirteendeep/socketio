// ==================================================
// Load Modules
// ==================================================

var gulp       = require('gulp'),
    browserify = require('browserify'),
    source     = require('vinyl-source-stream'),
    buffer     = require('vinyl-buffer'),
    stripDebug = require('gulp-strip-debug'),
    uglify     = require('gulp-uglify'),
    eslint     = require('gulp-eslint'),
    sourcemaps = require('gulp-sourcemaps'),
    gutil      = require('gulp-util'),
    cache      = require('gulp-cached');
    gnotify    = require('gulp-notify');

// ==================================================
// Load Configurations
// ==================================================

var project       = require('../../config'),
    build         = require('../configs/build')(),
    paths         = require('../configs/paths')(),
    scripts       = require('../configs/scripts')(),
    notifications = require('../configs/notifications');

scripts.lintFiles = scripts.lintFiles.concat(scripts.lintIgnore);

// ==================================================
// Tasks
// ==================================================

gulp.task('scripts', scripts.lint && !build.isProd && !build.isStage ? ['scripts:lint'] : '', function() {
    var bundledStream = browserify({
        entries: paths.src.base + 'leaves/scripts/main.js',
        debug: true
    });

    return bundledStream.bundle()
        .pipe(source(project.name + '.js'))
        .pipe(buffer())
        .pipe(!build.isProd && scripts.maps ? sourcemaps.init() : gutil.noop())
        .pipe(build.isProd ? stripDebug() : gutil.noop())
        .pipe(build.isProd ? uglify() : gutil.noop())
        .pipe(!build.isProd && scripts.maps ? sourcemaps.write('./') : gutil.noop())
        .pipe(gulp.dest(paths.public.scripts));
});

gulp.task('scripts:lint', function() {
    var files = [];
    var nbErrors = 0;
    var nbWarnings = 0;
    var msgJs = '';

    return gulp.src(scripts.lintFiles)
        .pipe(cache('eslint'))
        .pipe(eslint({
            extends: 'eslint:recommended',
            rules: scripts.lintRules,
            quiet: scripts.lintQuiet,
            globals: {
                'jQuery': true,
                '$': true
            },
            env: {
                'browser': true,
                'node': true
            }
        }))
        .pipe(eslint.format())
        .pipe(eslint.results(function(results) {
            // count errors/warnings and get relative path of files failing linting
            nbErrors = results.errorCount;
            nbWarnings = results.warningCount;

            if (results.errorCount > 0 || results.warningCount > 0) {
                build.hasError = true;
            }

            results.forEach(function(res) {
                if ( res.errorCount > 0 ||  res.warningCount > 0 ) {
                    files.push(res.filePath.split('/').pop());
                }
            });
        }))
        .pipe(notifications.enabled ? gnotify({
            title: 'Error running Gulp',
            sound: notifications.mute ? false : notifications.soundEr,
            icon: './node_modules/gulp-notify/assets/gulp-error.png',
            onLast: true,
            message: function(file) {
                // construct message and send it if has errors
                // this function will be executed only on last file
                if (build.hasError) {
                    msgJs = files.join(', ');

                    if (files.length > 1) {
                        msgJs = files.length + ' files (' + msgJs + ')';
                    }

                    msgJs += ' ' + notifications.msgJsLint + ' ';

                    if (nbErrors > 0) {
                        msgJs += nbErrors + ' error';
                        if ( nbErrors > 1 ) msgJs += 's';

                        if (nbWarnings > 0) {
                            msgJs += ' and ' + nbWarnings + ' warning';

                            if (nbWarnings > 1) msgJs += 's';
                        }
                    } else if (nbWarnings > 0) {
                        msgJs += nbWarnings + ' warning';

                        if (nbWarnings > 1) msgJs += 's';
                    }

                    return msgJs;
                }
            }
        }) : gutil.noop())
        .pipe(eslint.failAfterError());
});
