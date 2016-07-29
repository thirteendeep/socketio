'use strict';

// ==================================================
// Paths Configuration
// ==================================================

module.exports = function() {
    var project = require('../../config'),
        publicPath;

    if ( project.publicPath === '' ) {
        if ( project.type === 'craft' ) {
            publicPath = './public/';
        } else if ( project.type === 'wordpress' ) {
            publicPath = './wordpress/wp-content/themes/' + project.name + '/';
        }
    } else {
        publicPath = project.publicPath;
    }

    var settings = {
        root: {
            base: './'
        },
        src: {
            base: './groots/',
            styles: './groots/ground/styles/',
            scripts: './groots/ground/scripts/',
            images: './groots/leaves/images/',
            fonts: './groots/leaves/fonts/',
            gui: './groots/gui/'
        },
        public: {
            base: publicPath,
            styles: publicPath + 'dist/css/',
            scripts: publicPath + 'dist/js/',
            images: publicPath + 'dist/img/',
            fonts: publicPath + 'dist/fonts/',
            gui: project.type === 'wordpress' ? './wordpress/groots/' : publicPath + 'groots/'
        }
    };

    return settings;
};
