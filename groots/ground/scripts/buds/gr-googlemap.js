/*!
 * jQuery Google Map plugin
 * Author: Globalia
 * Licensed under the WTFPL license
 */


( function( $, window, document ) {

    "use strict";

    var pluginName = "googlemaper",
        defaults = {
            api_key: 'AIzaSyBizm1GWW3neDpQw0P3HU7dN9DouGIDN-A',
            lat: 45.502834,
            lng: -73.513764,
            url: 'https://goo.gl/maps/kFc2hjWsvAP2',
            pin: '/dist/img/demo/google-map-pin.png',
            title: '',
            markers: {},
            map_options: {
                draggable: false,
                styles: window.styleArray,
                scrollwheel: false,
                disableDoubleClickZoom: true
            }
        }

    function Plugin ( element, options ) {
        this.name = pluginName;
        this.element = element;
        this.settings = $.extend( {}, defaults, options );

        this.class = '.'+$(this.element).prop('class');

        this.lat_lng = {};
        this.map = {};
        this.bounds = {};

        this.init();
    }

    $.extend( Plugin.prototype, {
        init: function() {
            var instance = this;
            for( var i in defaults ){
                this.settings[i] = $(this.element).attr('gr-googlemap-'+i)  || this.settings[i];
            }

            window.googleMapsInitiated = function() {
                $(instance.class).each(function(){
                    $(this).googlemaper('display');
                });
            };

            if(!$('#googlemapscript').length) {
                var tag = document.createElement('script');
                tag.src = 'https://maps.googleapis.com/maps/api/js?key=' + instance.settings.api_key + '&callback=googleMapsInitiated';
                tag.id = 'googlemapscript';
                tag.async = true;
                var firstScriptTag = document.getElementsByTagName('script')[0];
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            }
        },
        display: function() {
            var instance = this;

            instance.lat_lng.lat = parseFloat(instance.settings.lat);
            instance.lat_lng.lng = parseFloat(instance.settings.lng);

            var mark_office = new window.google.maps.MarkerImage(
                instance.settings.pin,
                new window.google.maps.Size(50,69),     // size of the image
                new window.google.maps.Point(0,0),      // origin, in this case top-left corner
                new window.google.maps.Point(25, 69)    // anchor, i.e. the point half-way along the bottom of the image
            );

            instance.map = new window.google.maps.Map(instance.element, {
                center: instance.lat_lng,
                zoom: 13
            });
            instance.bounds = new window.google.maps.LatLngBounds();

            if(Object.keys(instance.settings.markers).length) {
                $.each(instance.settings.markers, function( key, value ){
                    var marker = new window.google.maps.Marker({
                        position: value.position,
                        map: instance.map,
                        title: value.title,
                        icon: mark_office
                    });
                    marker.addListener('click', function() {
                        var win = window.open('https://www.google.ca/maps/@'+value.position.lat+','+value.position.lng, '_blank');
                        win.focus();
                    });
                    instance.bounds.extend (new window.google.maps.LatLng(value.position.lat, value.position.lng));
                });
                instance.map.fitBounds(instance.bounds);
                instance.map.setZoom(instance.map.getZoom() - 2);
            } else {
                var marker = new window.google.maps.Marker({
                    position: instance.lat_lng,
                    map: instance.map,
                    title: instance.settings.title,
                    icon: mark_office
                });
                marker.addListener('click', function() {
                    var win = window.open('https://www.google.ca/maps/@'+instance.lat_lng.lat+','+instance.lat_lng.lng, '_blank');
                    win.focus();
                });
            }

            instance.map.setOptions(instance.settings.map_options);
            $(instance.element).addClass('is-loaded');

            window.google.maps.event.addDomListener(window, "resize", function() {
                var center = instance.map.getCenter();
                window.google.maps.event.trigger(instance.map, "resize");
                instance.map.setCenter(center);
            });
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
        $(document).find('[gr-googlemap]').googlemaper();
    });

}) (require('jquery'), window, document );
