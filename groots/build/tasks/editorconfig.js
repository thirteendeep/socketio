// ==================================================
// Load Modules
// ==================================================

var gulp         = require('gulp'),
    gutil        = require('gulp-util'),
    del          = require('del');

// ==================================================
// Load Configurations
// ==================================================

var project       = require('../../config'),
    paths         = require('../configs/paths')();


// ==================================================
// Tasks
// ==================================================

gulp.task('editorconfig', function() {
    fs.stat(paths.root.base + '.editorconfig', function(err, stat) {
        // Checking if file exist before applying redirection
        if (err !== null || err !== 'null') {
            if (project.editorConfig) {
                return gulp.src(paths.src.base + 'build/.editorconfig')
                    .pipe(gulp.dest(paths.root.base))
                    .on('end', function(){ gutil.log('.editorconfig was copied') });
            } else {
                del(paths.root.base + '.editorconfig')
                console.log('.editorconfig was deleted');
            }
        } else {
            console.log(err);
        }
    });
});
