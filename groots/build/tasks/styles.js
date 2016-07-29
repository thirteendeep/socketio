// ==================================================
// Load Configurations
// ==================================================

var project            = require('../../config'),
    build              = require('../configs/build')(),
    paths              = require('../configs/paths')(),
    styles             = require('../configs/styles')(),
    notifications      = require('../configs/notifications');

styles.lintFiles = styles.lintFiles.concat(styles.lintIgnore);

// ==================================================
// Load Modules
// ==================================================

var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    stylelint    = require('gulp-stylelint'),
    postcss      = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssnano      = require('cssnano'),
    flexibility  = require('postcss-flexibility'),
    fonts        = require('postcss-font-magician'),
    sourcemaps   = require('gulp-sourcemaps'),
    gutil        = require('gulp-util'),
    path         = require('path'),
    chalk        = require('chalk'),
    symbols      = require('log-symbols'),
    gnotify      = require('gulp-notify'),
    rename       = require('gulp-rename'),
    cache        = require('gulp-cached'),
    table        = require('text-table');

// ==================================================
// Tasks
// ==================================================

gulp.task('styles', styles.lint && !build.isProd && !build.isStage ? ['styles:lint'] : '', function() {
    return gulp.src(paths.src.base + 'leaves/styles/main.scss')
        .pipe(styles.maps && !build.isProd ? sourcemaps.init() : gutil.noop())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(build.isProd ?
            // if build
            postcss([
                fonts(),
                autoprefixer({
                    browsers: styles.autoprefixer
                }),
                cssnano(),
                flexibility()
            ]):
            // if dev
            postcss([
                fonts(),
                autoprefixer({
                    browsers: styles.autoprefixer
                }),
                flexibility()
            ])
        )
        .pipe(rename(project.name + '.css'))
        .pipe(styles.maps && !build.isProd ? sourcemaps.write('./') : gutil.noop())
        .pipe(gulp.dest(paths.public.styles));
});

gulp.task('styles:lint', function () {
    var files = [];
    var nbErrors = 0;
    var nbWarnings = 0;
    var msgCss = '';

    return gulp.src(styles.lintFiles)
        .pipe(stylelint({
            config: styles.lintRules,
            failAfterError: false,
            syntax: 'scss',
            reporters: [
                {
                    formatter: function(results) {
                        var output = '';
                        var summaryColor = 'yellow';
                        var issues = 0;
                        var issuesTab = [];

                        // build issues table(s)
                        results.forEach(function(result, index) {
                            if (result.warnings.length) {
                                build.hasError = true;
                                if (result.errored) summaryColor = 'red';
                                files.push(result.source.split('/').pop());

                                output += chalk.underline(path.relative(process.cwd(), result.source) + '\n');

                                for (var i = 0; i < result.warnings.length; i++) {
                                    issuesTab[i] = [];

                                    issuesTab[i].push(chalk.gray(result.warnings[i].line + ':' + result.warnings[i].column));

                                    if (result.warnings[i].severity === "warning") {
                                        nbWarnings += 1;
                                        issuesTab[i].push(chalk.yellow(symbols.warning));
                                    } else if (result.warnings[i].severity === "error") {
                                        nbErrors += 1;
                                        issuesTab[i].push(chalk.red(symbols.error));
                                    }

                                    issuesTab[i].push(result.warnings[i].text.split('(').shift());

                                    issuesTab[i].push(' ' + chalk.gray(result.warnings[i].rule));
                                }

                                output += table(issuesTab) + '\n\n';
                            }
                        });

                        // construct summary string
                        issues = nbErrors + nbWarnings;

                        if ( issues > 0 ) {
                            output += chalk[summaryColor].bold('\u2716', issues, 'problem');

                            if ( issues > 1 ) output += chalk[summaryColor].bold('s');

                            output += chalk[summaryColor].bold(' (' + nbErrors + ' error');

                            if ( nbErrors > 1 ) output += chalk[summaryColor].bold('s');

                            output += chalk[summaryColor].bold(' and', nbWarnings, 'warning');

                            if ( nbWarnings > 1 ) output += chalk[summaryColor].bold('s');

                            output += chalk[summaryColor].bold(')') + '\n';
                        }

                        return output;
                    },
                    console: true
                }
            ]
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
                    msgCss = files.join(', ');

                    if (files.length > 1) {
                        msgCss = files.length + ' files (' + msgCss + ')';
                    }

                    msgCss += ' ' + notifications.msgSassLint + ' ';

                    if (nbErrors > 0) {
                        msgCss += nbErrors + ' error';

                        if ( nbErrors > 1 ) msgCss += 's';

                        if (nbWarnings > 0) {
                            msgCss += ' and ' + nbWarnings + ' warning';

                            if ( nbWarnings > 1 ) msgCss += 's';
                        }
                    } else {
                        msgCss += nbWarnings + ' warning';

                        if (nbWarnings > 1) msgCss += 's';
                    }

                    return msgCss;
                }
            }
        }) : gutil.noop())
        .pipe(notifications.enabled ? stylelint({
            config: styles.lintRules,
            failAfterError: true,
            syntax: 'scss',
            reporters: [
                {formatter: 'string', console: false}
            ]
        }) : gutil.noop());
});
