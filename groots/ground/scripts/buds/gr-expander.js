/*!
 * jQuery Expander plugin
 * Author: Globalia
 * Licensed under the WTFPL license
 */


( function( $, window, document ) {

    "use strict";

    var pluginName = 'expander',
        defaults = {
            trigger: '.expander__trigger',
            target: '.expander__content'
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
            this.$targets =  $(this.element).find(this.settings.target);
            this.$triggers = $(this.element).find(this.settings.trigger);
            this.paddings = parseInt($(this.element).css('padding-bottom'), 10); // get padding bottom to be able to increment on expand or reset default value on collapse

            var instance = this;

            if (! $(instance.element).find('.expander__wrapper').length) {
                instance.$targets.wrapInner( "<div class='expander__wrapper'></div>" ); // we need an inner wrapper to be able to calculate the height before we expand
            }

            instance.$triggers.on('click', function(e) {
                e.preventDefault();

                if ($(instance.element).hasClass('is-expanded')) {
                    instance.collapse();
                } else {
                    instance.collapse($(instance.element).siblings('.is-expanded')); // first collapse already expanded elements
                    instance.expand();
                }
            });
        },
        expand: function(item) {
            var instance = this;
            if (typeof item === 'undefined') {
                item = $(instance.element); // default is current instance
            }

            var wrapper = item.find('.expander__wrapper'),
                contentH = wrapper.outerHeight(true); // get real height of hidden content

            item.find(instance.settings.target).css('height', contentH); // set height on hidden content
            item
                .addClass('is-expanded')
                .css('padding-bottom', instance.paddings + contentH); // add target height to padding bottom of element
        },
        collapse: function(item) {
            var instance = this;
            if (typeof item === 'undefined') {
                item = $(instance.element); // default is current instance
            }

            item.find(instance.settings.target).css('height', 0).removeAttr('style');
            item
                .removeClass('is-expanded')
                .css('padding-bottom', instance.paddings);
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
        });
    };

    $(function () {
        $(document).find('[gr-expander]').expander();
    });

    // Collapse expanded areas on resize for desktops / on orientation change for mobiles

    var isTouch = ('ontouchstart' in window) || (window.navigator.msMaxTouchPoints),
        collapseEvent = '';

    if (isTouch) {
        collapseEvent = 'orientationchange';
    } else {
        collapseEvent = 'resize';
    }

    $(window).on(collapseEvent, function () {
        $(document).find('[gr-expander]').expander('collapse', $(this).siblings('.is-expanded'));
    });

}(require('jquery'), window, document));
