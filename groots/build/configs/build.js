'use strict';

// ==================================================
// Build Configuration
// ==================================================

module.exports = function() {
    var gutil = require('gulp-util');

    var settings = {
        hasError: false,
        isStage: gutil.env.stage ? true : false,
        isProd: gutil.env.prod ? true : false
    };

    return settings;
};
