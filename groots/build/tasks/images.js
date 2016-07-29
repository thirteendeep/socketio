// ==================================================
// Load Modules
// ==================================================

var gulp         = require('gulp'),
    imagemin     = require('gulp-imagemin'),
    imageminWebp = require('imagemin-webp'),
    changed      = require('gulp-changed'),
    gutil        = require('gulp-util');

// ==================================================
// Load Configurations
// ==================================================

var paths  = require('../configs/paths')(),
    images = require('../configs/images');

// ==================================================
// Tasks
// ==================================================

gulp.task('images', images.webp ? ['images:svg', 'images:webp'] : ['images:svg'], function() {
    return gulp.src([paths.src.images + '**/*.{'+ images.extensions +'}',
        '!' + paths.src.images + 'svg/*'])
        .pipe(changed(paths.public.images))
        .pipe(imagemin(images.optimize))
        .pipe(gulp.dest(paths.public.images));
});

gulp.task('images:svg', function() {
    return gulp.src(paths.src.images + 'svg/*')
        .pipe(changed(paths.public.images))
        .pipe(gulp.dest(paths.public.images + 'svg/'));
});

gulp.task('images:webp', function() {
    return gulp.src(paths.src.images + '**/*.{'+ images.extensions +'}')
        .pipe(changed(paths.public.images))
        .pipe(imageminWebp()())
        .pipe(gulp.dest(paths.public.images));
});
