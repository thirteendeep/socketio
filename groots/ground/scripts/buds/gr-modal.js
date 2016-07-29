/*!
 * jQuery Modal plugin
 * Author: Globalia
 * Licensed under the WTFPL license
 */


( function( $, window, document ) {

    "use strict";

    var pluginName = "modal",
        defaults = {
            onOpen: null,
            onClose: null
        };

    function Plugin ( element, options ) {
        this.name = pluginName;
        this.element = element;
        this.settings = $.extend( {}, defaults, options );
        this.$overlay = $('<div gr-overlay />');
        this.$handler = $(element).closest('[gr-handler]');
        this.target = $(this.element).attr('href');
        this.content = $(this.target).detach();
        this.init();
    }

    $.extend( Plugin.prototype, {
        init: function() {
            var instance = this;

            for( var i in defaults ){
                instance.settings[i] = $(instance.element).attr('gr-modal-'+i)  || instance.settings[i];
            }
            $(instance.target).hide();
            if (! $('[gr-overlay]').length) {
                instance.$overlay.appendTo(instance.$handler);
            } else {
                instance.$overlay = $('[gr-overlay]');
            }
            if (! $('[gr-modal-box]').length) {
                $('body').append('<div gr-modal-box />');
                $('[gr-modal-box]')
                    .append('<button gr-modal-close />')
                    .append('<div gr-modal-content></div>');
            }

            $(instance.element).on('click', function(event) {
                event.preventDefault();
                $('[gr-modal-content]').empty();
                instance.content.appendTo('[gr-modal-content]').removeAttr('hidden');
                instance.open();
            });

            $('[gr-modal-close]').on('click', function(event) {
                event.preventDefault();
                instance.content.detach();
                $('[gr-modal-content]').empty();

                // var offset = instance.$handler.css('top');
                // console.log(offset);
                // instance.$handler.removeAttr('style');
                // $(document).scrollTop(-offset);

                instance.close();
            });

            instance.$overlay.on('click', function(event) {
                event.preventDefault();
                instance.content.detach();
                $('[gr-modal-content]').empty();
                instance.close();
            });
        },
        open: function() {
            var instance = this;
            instance.$handler.addClass('has-modal-open');
            // instance.$handler.css({
            //     top: -$(document).scrollTop(),
            //     position: 'fixed'
            // });
            $('[gr-modal-box]').addClass('is-visible');
        },
        close: function() {
            var instance = this;
            instance.$handler.removeClass('has-modal-open');
            $('[gr-modal-box]').removeClass('is-visible');
            $('[gr-modal-content]').empty();
        },
        destroy: function() {
            //var instance = this;
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
        $(document).find('[gr-modal]').modal();

    });

}) (require('jquery'), window, document);
