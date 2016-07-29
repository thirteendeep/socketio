// to top right away
//if ( window.location.hash ) scroll(0,0);
// void some browsers issue
//setTimeout( function() { scroll(0,0); }, 1);

( function( $, plyr ) {

    "use strict"; // Start of use strict

    $('a[href*="#"]:not([href="#"]):not([gr-modal]):not([gr-popup])').on('click', function(event) {
        event.preventDefault();
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash).length ? $(this.hash) : $('[name=' + this.hash.slice(1) +']');
            var offset = $('[gr-nav-sticky]').length ? $('[gr-nav-sticky]').outerHeight(true) : 0;
            if (target.length) {
                $('body, html').stop().animate({
                    scrollTop: target.offset().top - offset
                }, 1000);
            }
        }
    });

    if(window.location.hash) {
        var offset = $('[gr-nav-sticky]').length ? $('[gr-nav-sticky]').outerHeight(true) : 0;
        $('body, html').stop().animate({
            scrollTop: $('[name='+ window.location.hash.slice(1) +']').offset().top - offset
        }, 1000);
    }


    $('[gr-video]').length && $('[gr-video]').each(function(){
        $(this).wrap('<div class="plyr" />');
        plyr.setup();
    });

    $(document).on('click', '[gr-popup]', function(event) {
        event.preventDefault();

        var winHeight = 400, //Could be an option
            winWidth = 600, //Could be an option
            winTop = ($(window).height() / 2) - (winHeight / 2),
            winLeft = ($(window).width() / 2) - (winWidth / 2),
            url = $(this).attr('href');

        window.open(url, '_blank', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
    });

    window.scrollbarWidth = function() {
        var $inner = $('<div style="width: 100%; height:1px;"></div>'),
            $outer = $('<div style="width:1px;height:1px; position: absolute; top: 0; left: 0; visibility: hidden; overflow:hidden;"></div>').append($inner),
            inner = $inner[0],
            outer = $outer[0];

        $('body').append(outer);
        var width1 = inner.offsetWidth;
        $outer.css('overflow', 'scroll');
        var width2 = outer.clientWidth;
        $outer.remove();

        return (width1 - width2);
    }

} )( require('jquery'), require('plyr'));
