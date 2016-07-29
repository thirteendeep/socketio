/*!
 * jQuery Responsive Navigation plugin
 * Author: Globalia
 * Licensed under the WTFPL license
 */


( function( $, window, document ) {

    "use strict";

    var pluginName = "navigation",
        defaults = {
            breakpoint: 0
        };

    function Plugin ( element, options ) {
        this.name = pluginName;
        this.element = element;
        this.settings = $.extend( {}, defaults, options );
        this.$overlay = $('<div gr-overlay />');
        this.$handler = $(element).closest('[gr-handler]');
        this.init();
    }

    $.extend( Plugin.prototype, {
        init: function() {
            var instance = this;
            for( var i in defaults ){
                instance.settings[i] = $(instance.element).attr('gr-nav-'+i)  || instance.settings[i];
            }
            instance.breakpoint = ( isNaN(instance.settings.breakpoint) ? parseInt(window.sassBreakpoints[instance.settings.breakpoint], 10) * 16 : this.settings.breakpoint);
            if (! $('[gr-overlay]').length) {
                instance.$overlay.appendTo(instance.$handler);
            } else {
                instance.$overlay = $('[gr-overlay]');
            }
            $('[gr-nav-trigger]', $(instance.element)).on('click', function(event) {
                event.preventDefault();
                instance.toggle();
            });
            instance.$overlay.on('click', function(event) {
                event.preventDefault();
                instance.close();
            });
            $(window).on('resize orientationchange', function() {
                if(instance.$handler.width() >= instance.breakpoint) {
                    instance.close();
                }
            });
        },
        toggle: function() {
            var instance = this;
            $(instance.element).toggleClass('is-open');
            instance.$handler.toggleClass('has-nav-open');
            if(instance.$handler.hasClass('has-nav-open')){
                instance.$handler.css({'padding-right': window.scrollbarWidth()});
                if($(instance.element).attr('gr-nav-sticky').length){
                    $(instance.element).css({'right': window.scrollbarWidth()});
                }
            } else {
                instance.$handler.css({'padding-right': 0});
                $(instance.element).css({'right': 0});
            }
        },
        close: function() {
            var instance = this;
            $(instance.element).removeClass('is-open');
            instance.$handler.removeClass('has-nav-open');
            instance.$handler.css({'padding-right': 0});
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
        $(document).find('[gr-nav]').navigation();
    });

    $(document).on('keyup', function(event) {
        if (event.keyCode == 27) {
            $(document).find('[gr-nav]').navigation('close');
        }
    });

} )( require('jquery'), window, document );
