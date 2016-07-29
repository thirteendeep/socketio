/*!
 * jQuery Lazy-Loader plugin
 * Author: Globalia
 * Licensed under the WTFPL license
 */


( function( $, window, document ) {

    "use strict";

    var pluginName = "lazyloader",
        defaults = {
            xs: null,
            sm: null,
            md: null,
            lg: null
        };

    function ViewportDetect(el) {
        var rect = el.getBoundingClientRect();
        return rect.bottom > 0 && rect.top < (window.innerHeight || document.documentElement.clientHeight);
    }

    function Plugin ( element, options ) {
        this.name = pluginName;
        this.element = element;
        this.settings = $.extend( {}, defaults, options );
        this.$fallback = $(this.element).find('img');
        this.id = this.$fallback.prop('id');
        this.class = this.$fallback.prop('class');
        this.src = this.$fallback.prop('src');
        this.alt = this.$fallback.prop('alt');
        this.init();
    }

    $.extend( Plugin.prototype, {
        init: function() {
            var instance = this;

            for( var i in defaults ){
                instance.settings[i] = $(this.element).attr('gr-lazyloader-'+i) || instance.src;
            }

            $.each(instance.settings, function( key, value ){
                if( value != null && !isNaN(parseInt(window.sassBreakpoints[key], 10))) {
                    if(window.innerWidth >= ( parseInt(window.sassBreakpoints[key], 10) * 16 )) {
                        instance.src = value;
                    }

                } else {
                    instance.src = instance.$fallback.attr('src');
                }
            });

            if(ViewportDetect($(instance.element)[0])) {
                if( !$('img', $(instance.element)).hasClass('is-lazyloaded')){
                    instance.load(instance.src);
                } else {
                    if( $('img', $(instance.element)).attr('src')!=instance.src ) {
                        instance.load(instance.src);
                    }
                }
            }

            $(window).on('scroll', function () {
                if(ViewportDetect($(instance.element)[0])) {
                    if( !$('img', $(instance.element)).hasClass('is-lazyloaded')){
                        instance.load(instance.src);
                        console.log('bug1');
                    } else {
                        if( $('img', $(instance.element)).attr('src')!=instance.src ) {
                            instance.load(instance.src);
                            console.log('bug2');
                        }
                    }
                }
            });
        },
        load: function(url) {
            var instance = this;

            $(instance.element).addClass('is-lazyloading');

            var img = new Image();
            img.id = instance.id;
            img.class = instance.class;
            img.alt = instance.alt;
            img.src = url;

            img.onload = function () {

                $(instance.element).find('img').remove();
                $(instance.element).append(img);
                setTimeout(function () {
                    $(img).addClass('is-lazyloaded');
                    $(instance.element).removeClass('is-lazyloading');
                }, 0);
            };
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
        $(document).find('[gr-lazyloader]').lazyloader();
    });

    $(window).on('resize orientationchange', function () {
        $(document).find('[gr-lazyloader]').lazyloader('init');
    });

}) (require('jquery'), window, document );
