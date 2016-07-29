// ==================================================
// Load Modules
// ==================================================

var gulp           = require('gulp'),
    changed        = require('gulp-changed')

// ==================================================
// Load Configurations
// ==================================================

var paths = require('../configs/paths')(),
    fonts = require('../configs/fonts')();

// ==================================================
// Tasks
// ==================================================

gulp.task('fonts', function() {
    return gulp.src(paths.src.fonts + '**/*.{'+ fonts.extensions +'}')
        .pipe(changed(paths.public.fonts))
        .pipe(gulp.dest(paths.public.fonts));
});

gulp.task('fonts:awesome', function () {
   return gulp.src('node_modules/font-awesome/fonts/fontawesome-webfont.*')
       .pipe(gulp.dest(paths.public.fonts));
});
