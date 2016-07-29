/*!
 * jQuery InlinerSVG plugin
 * Author: Globalia
 * Licensed under the WTFPL license
 *
 * Replace all SVG images with the class .svg in inline SVG
 */



( function( $, window, document ) {

    "use strict";

    var pluginName = "inliner";

    function Plugin ( element ) {
        this.element = element;
        this._name = pluginName;
        this.id = $(this.element).prop('id');
        this.class = $(this.element).prop('class');
        this.src = $(this.element).prop('src');
        this.init();
    }

    $.extend( Plugin.prototype, {
        init: function() {

            var $this = $( this.element );

            $.get(this.src, function (data) {
                // Get the SVG tag, ignore the rest
                var $svg = $(data).find('svg');
                // Add replaced image's ID to the new SVG
                if (typeof this.id !== 'undefined') {
                    $svg = $svg.prop('id', this.id);
                }
                // Add replaced image's classes to the new SVG
                if (typeof this.class !== 'undefined') {
                    $svg = $svg.prop('class', this.class + ' replaced-svg');
                }
                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');
                // Replace image with new SVG
                $this.replaceWith($svg);
            }, 'xml');
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
        $(document).find('img.svg').inliner();
    });

}(require('jquery'), window, document));
