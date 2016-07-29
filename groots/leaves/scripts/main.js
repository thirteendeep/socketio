var jquery = jQuery = $ = require('jquery');

require('../../ground/scripts/buds/gr-snippets.js');
require('../../ground/scripts/buds/gr-equalizer.js');
require('../../ground/scripts/buds/gr-form.js');
require('../../ground/scripts/buds/gr-inline-svg.js');
require('../../ground/scripts/buds/gr-lazy-loader.js');
require('../../ground/scripts/buds/gr-nav.js');
require('../../ground/scripts/buds/gr-objectfit.js');
require('../../ground/scripts/buds/gr-modal.js');
require('../../ground/scripts/buds/gr-expander.js');
require('../../ground/scripts/buds/gr-googlemap.js');
require('../../ground/scripts/buds/gr-video-bg.js');

( function( $, window, document ) {
    "use strict";

    window.sassBreakpoints = $('[gr-handler]').sassToJs({
        pseudoEl: '::before',
        cssProperty: 'content',
        debug: true
    });

    window.styleArray = [{
        featureType: 'all',
        stylers: [
            { saturation: -80 }
        ]
    },{
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [
            { hue: '#00ffee' },
            { saturation: 50 }
        ]
    },{
        featureType: 'poi.business',
        elementType: 'labels',
        stylers: [
            { visibility: 'off' }
        ]
    }];

    $(window).on('scroll load', function() {
        if ($(window).scrollTop() > 10) {
            $(document).find('[gr-nav]').addClass('is-scrolled');
        } else {
            $(document).find('[gr-nav]').removeClass('is-scrolled');
        }
    });

}(jquery, window, document));
