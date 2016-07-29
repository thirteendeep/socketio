/* jQuery tubular plugin
|* by Sean McCambridge
|* http://www.seanmccambridge.com/tubular
|* version: 1.0
|* updated: October 1, 2012
|* since 2010
|* licensed under the MIT License
|* Enjoy.
|*
|* Thanks,
|* Sean */


( function( $, window, document ) {

    "use strict";

    window.players = {};

    window.onYouTubeIframeAPIReady = function() {
        $.each(window.players, function( key ){
            var objp = this;
            objp.player = new window.YT.Player('vbp_'+key, {
                width: objp.grSettings.width,
                height: Math.ceil(objp.grSettings.width / objp.grSettings.ratio),
                videoId: objp.grSettings.youtube,
                playerVars: {
                    controls: 0,
                    showinfo: 0,
                    modestbranding: 1,
                    wmode: 'transparent'
                },
                events: {
                    'onReady': function(event) {
                        if (objp.grSettings.mute) event.target.mute();

                        var pWidth, // player width, to be defined
                            pHeight, // player height, tbd
                            $videoBgPlayer = $(event.target.a);

                        // when screen aspect ratio differs from video, video must center and underlay one dimension
                        if($(window).width() > objp.grSettings.breakpoint){
                            if ($(window).width() / objp.grSettings.ratio < $(window).height()) { // if new video height < window height (gap underneath)
                                pWidth = Math.ceil($(window).height() * objp.grSettings.ratio); // get new player width
                                $videoBgPlayer.width(pWidth).height($(window).height()).css({left: ($(window).width() - pWidth) / 2, top: 0}); // player width is greater, offset left; reset top
                            } else { // new video width < window width (gap to right)
                                pHeight = Math.ceil($(window).width() / objp.grSettings.ratio); // get new player height
                                $videoBgPlayer.width($(window).width()).height(pHeight).css({left: 0, top: ($(window).height() - pHeight) / 2}); // player height is greater, offset top; reset left
                            }
                            event.target.seekTo(objp.grSettings.start);
                            event.target.playVideo();

                        } else {
                            event.target.stopVideo();
                        }
                    },
                    'onStateChange': function(state) {
                        if (state.data === 0 && objp.grSettings.repeat) { // video ended and repeat option is set true
                            objp.player.seekTo(objp.grSettings.start); // restart
                        } else if (state.data === 0 || state.data === 2) { // video is paused/stopped
                            $('#vbp_'+objp.grSettings.youtube).hide();
                            $('#vbp_'+objp.grSettings.youtube).next('img').show();
                        } else if (state.data === 1) { // video is playing
                            $('#vbp_'+objp.grSettings.youtube).show();
                            $('#vbp_'+objp.grSettings.youtube).next('img').fadeOut(1000);
                        }

                    }
                }
            });

            $(window).on('resize.videoBg', function() {
                var pWidth, // player width, to be defined
                    pHeight, // player height, tbd
                    $videoBgPlayer = $('#vbp_'+objp.grSettings.youtube);

                objp.player.stopVideo();

                // when screen aspect ratio differs from video, video must center and underlay one dimension
                if($(window).width() > objp.grSettings.breakpoint){
                    if ($(window).width() / objp.grSettings.ratio < $(window).height()) { // if new video height < window height (gap underneath)
                        pWidth = Math.ceil($(window).height() * objp.grSettings.ratio); // get new player width
                        $videoBgPlayer.width(pWidth).height($(window).height()).css({left: ($(window).width() - pWidth) / 2, top: 0}); // player width is greater, offset left; reset top
                    } else { // new video width < window width (gap to right)
                        pHeight = Math.ceil($(window).width() / objp.grSettings.ratio); // get new player height
                        $videoBgPlayer.width($(window).width()).height(pHeight).css({left: 0, top: ($(window).height() - pHeight) / 2}); // player height is greater, offset top; reset left
                    }
                    objp.player.seekTo(objp.grSettings.start);
                    objp.player.playVideo();
                }
            });
        });
    }

    var pluginName = "videoBg",
        defaults = {
            ratio: 16/9, // usually either 4/3 or 16/9 -- tweak as needed
            youtube: 'ScMzIvxBSi4',
            mute: true,
            repeat: true,
            start: 0,
            breakpoint: 0
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
                this.settings[i] = $(this.element).attr('gr-video-bg-'+i) || this.settings[i];
            }
            this.settings.breakpoint = ( isNaN(this.settings.breakpoint) ? parseInt(window.sassBreakpoints[this.settings.breakpoint], 10) * 16 : this.settings.breakpoint);

            var instance = this;
            $(instance.element).prepend('<div id="vbp_'+instance.settings.youtube+'" style="position:absolute"></div>');

            window.players[instance.settings.youtube] = {
                'player': {},
                'grSettings': instance.settings
            };

            if(!$('#videobgscript').length){
                var tag = document.createElement('script');
                tag.src = "//www.youtube.com/iframe_api";
                tag.id = 'videobgscript';
                tag.async = true;
                var firstScriptTag = document.getElementsByTagName('script')[0];
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            }
        },
        callFunction: function (call, options) {
            if(typeof this[call] === 'function') {
                return this[call](options);
            }
        }
    });

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
        $(document).find('[gr-video-bg]').videoBg();
    });

})(jQuery, window, document);
