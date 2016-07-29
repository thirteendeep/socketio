'use strict';

// ==================================================
// Scripts Configuration
// ==================================================

module.exports = function() {
    var paths = require('../configs/paths')();

    var settings = {
        maps: true,
        lint: true,
        lintQuiet: false, // if true linting will only report errors
        lintRules: {
            'indent': 1,
            'no-undef': 1,
            'no-unused-vars': 1,
            'no-extra-semi': 0,
            'no-console': 0
        },
        lintIgnore: [
            '!' + paths.src.scripts + 'seeds/jq-boilerplate.js'
        ],
        lintFiles: [
            paths.src.scripts + '**/*.js',
            paths.src.base + 'leaves/scripts/**/*.js'
        ]
    };

    return settings;
};
