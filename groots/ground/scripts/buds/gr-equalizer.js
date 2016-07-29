/*!
 * jQuery Equalizer plugin
 * Author: Globalia
 * Licensed under the WTFPL license
 */


( function( $, window, document ) {

    "use strict";

    var pluginName = "equalizer",
        defaults = {
            breakpoint: 0,
            target:     '>*'
        };

    function Plugin ( element, options ) {
        this.name = pluginName;
        this.element = element;
        this.settings = $.extend( {}, defaults, options );
        this.init();
    }

    $.extend( Plugin.prototype, {
        init: function() {
            for( var i in defaults ){
                this.settings[i] = $(this.element).attr('gr-equalizer-'+i)  || this.settings[i];
            }
            this.breakpoint = ( isNaN(this.settings.breakpoint) ? parseInt(window.sassBreakpoints[this.settings.breakpoint], 10) * 16 : this.settings.breakpoint);
            this.tallest = 0;
            this.dims = [];
            this.items = $(this.element).find(this.settings.target);
            this.equalize();
        },
        equalize: function() {
            var instance = this;
            instance.tallest = 0;
            instance.dims = [];
            $(instance.items).each(function () { //add heights to array
                $(this).css('min-height', 0);
                instance.dims.push(this.scrollHeight);
            });
            instance.tallest = Math.max.apply(null, instance.dims); //cache largest value
            if(window.innerWidth >= instance.breakpoint) {
                $(instance.items).each(function () {
                    $(this).css('min-height', instance.tallest + 'px');
                });
            }
        },
        callFunction: function (call, options) {
            if(typeof this[call] === 'function') {
                return this[call](options);
            }
        }
    } );

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[ pluginName ] = function(call, options ) {
        return this.each( function() {
            if ( !$.data( this, "plugin_" + pluginName ) ) {
                $.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
            } else {
                return $.data(this, "plugin_" + pluginName).callFunction(call, options);
            }
        } );
    };

    $(function () {
        $(document).find('[gr-equalizer]').equalizer();
    });

    $(window).on('resize orientationchange', function () {
        $(document).find('[gr-equalizer]').equalizer('equalize');
    });

}) (require('jquery'), window, document, require('sass-to-js') );
