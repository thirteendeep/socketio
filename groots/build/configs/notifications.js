'use strict';

// ==================================================
// Notifications Configuration
// ==================================================

module.exports = {
    enabled: true,
    mute: false, // disable sound on error notifications
    sound: 'Ping',
    soundEr: 'Frog',
    msgDev: 'Dev tasks completed with success',
    msgImg: 'Images optimized',
    msgSass: 'SASS files compiled',
    msgJs: 'JS files concatened',
    msgFonts: 'Fonts copied',
    msgFavicons: 'Favicons generated',
    msgJs: 'JS files concatened',
    msgGui: 'GUI files generated',
    msgGuiSass: 'GUI SASS files generated',
    msgSassLint: 'failed SASS linting with', // will output : file(s) + 'your message' + nb errors/warnings
    msgJsLint: 'failed JS linting with' // will output : file(s) + 'your message' + nb errors/warnings
};

// Notify sounds on OSX =============================

// Notify sounds can be one of these: Basso, Blow, Bottle, Frog, Funk, Glass, Hero, Morse, Ping, Pop, Purr, Sosumi, Submarine, Tink
// You can add your custom sound, just drop your sound in ~/Library/Sounds folder then use the file name as string in config above (sounds have to be aiff files http://www.online-convert.com/)
