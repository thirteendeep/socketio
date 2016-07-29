// ==================================================
// Load Modules
// ==================================================

var gulp         = require('gulp'),
    browserify   = require('browserify'),
    source       = require('vinyl-source-stream'),
    buffer       = require('vinyl-buffer'),
    stripDebug   = require('gulp-strip-debug'),
    uglify       = require('gulp-uglify'),
    eslint       = require('gulp-eslint'),
    sourcemaps   = require('gulp-sourcemaps'),
    gutil        = require('gulp-util'),
    cache        = require('gulp-cached');
    rename       = require('gulp-rename'),
    fs           = require('fs'),
    sass         = require('gulp-sass'),
    stylelint    = require('gulp-stylelint'),
    postcss      = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssnano      = require('cssnano'),
    fonts        = require('postcss-font-magician'),
    flexibility  = require('postcss-flexibility'),
    changed      = require('gulp-changed'),
    gnotify      = require('gulp-notify');

// ==================================================
// Load Configurations
// ==================================================

var project       = require('../../config'),
    build         = require('../configs/build')(),
    paths         = require('../configs/paths')(),
    styles        = require('../configs/styles')(),
    scripts       = require('../configs/scripts'),
    gui           = require('../configs/gui')();

//gui.lintFiles = gui.lintFiles.concat(gui.lintIgnore);

// ==================================================
// Tasks
// ==================================================

gulp.task('gui', function() {
    return gulp.src(paths.src.gui + 'gui.php')
        .pipe(gulp.dest(paths.public.gui));
});

gulp.task('gui:build', ['gui:scripts', 'gui:styles', 'gui:htaccess', 'gui']);

gulp.task('gui:htaccess', function() {
    fs.stat(paths.public.base + '.htaccess', function(err, stat) {
        // Checking if file exist before applying redirection
        if (err !== null) {
            return gulp.src(paths.src.base + 'build/.htaccess')
                .pipe(gulp.dest(paths.public.base));
        } else {
            if (project.type === 'wordpress') {
                fs.readFile('./wordpress/.htaccess', 'utf-8', function(err, data) {
                    if (err) throw err;

                    var lines = data.trim().split('\n');
                    var lastLine = lines.slice(-1)[0];

                    if (lastLine !== '#END Groots') {
                        var htaccess = '\n#BEGIN Groots\n\n';
                        htaccess += '<IfModule mod_rewrite.c>\n';
                        htaccess += 'RewriteCond %{REQUEST_URI} !^/groots$';
                        htaccess += '\n</IfModule>';
                        htaccess += '\n\n#END Groots\n';

                        fs.appendFile('./wordpress/.htaccess', htaccess, function(err) {
                            if (err) return console.log(err);
                        });
                    }
                });
            }
        }
    });
});

gulp.task('gui:scripts', function() {
    var bundledStream = browserify({
        entries: paths.src.scripts + 'gui.js',
        debug: true
    });

    return bundledStream.bundle()
        .pipe(source('gui.min.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest(paths.public.scripts));
});

gulp.task('gui:styles', function() {
    return gulp.src(paths.src.styles + 'gui.scss')
        .pipe(stylelint({
            config: styles.lintRules,
            syntax: 'scss',
            reporters: [
                {formatter: 'string', console: true}
            ]
        }))
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(postcss([
            fonts,
            autoprefixer({
                browsers: styles.autoprefixer
            }),
            flexibility,
            cssnano
        ]))
        .pipe(rename('gui.min.css'))
        .pipe(gulp.dest(paths.public.styles));
});
