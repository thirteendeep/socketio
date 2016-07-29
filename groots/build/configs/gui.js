'use strict';

// ==================================================
// Styles Configuration
// ==================================================

module.exports = function() {
    var paths = require('../configs/paths')();

    var settings = {
        scripts    : [],
        //lintIgnore : [],
        lintFiles  : [
            paths.src.styles + '**/*.scss',
            paths.src.base + 'leaves/styles/**/*.scss'
        ]
    };

    return settings;
};
