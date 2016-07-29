'use strict';

// ==================================================
// Styles Configuration
// ==================================================

module.exports = function() {
    var project = require('../../config'),
        paths   = require('../configs/paths')();

    var settings = {
        picture : paths.src.base + 'leaves/favicon/favicon.png',
        data    : paths.src.base + 'leaves/favicon/favicon.json',
        dest    : paths.public.base + '/dist/favicons/',
        design  : {
                    ios: {
                        pictureAspect: 'backgroundAndMargin',
                        backgroundColor: project.faviconBG,
                        margin: '0'
                    },
                    desktopBrowser: {},
                    windows: {
                        pictureAspect: 'whiteSilhouette',
                        backgroundColor: project.faviconBG,
                        onConflict: 'override'
                    },
                    androidChrome: {
                        pictureAspect: 'noChange',
                        themeColor: project.theme,
                        backgroundColor: project.faviconBG,
                        manifest: {
                            name: project.name,
                            display: 'browser',
                            orientation: 'notSet',
                            onConflict: 'override'
                        }
                    },
                    safariPinnedTab: {
                        pictureAspect: 'silhouette',
                        themeColor: project.theme
                    }
                }
    };

    return settings;
};
