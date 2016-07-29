/*!
 * jQuery Custom-form-elements plugin
 * Author: Globalia
 * Licensed under the WTFPL license
 */



// Custom Select
// --------------------------------------------------

( function( $, window, document ) {

    "use strict";

    var pluginName = "customSelect",
        defaults = {
            height: "450%"
        };

    function Plugin ( element, options ) {
        this.element = element;
        this.settings = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    // Avoid Plugin.prototype conflicts
    $.extend( Plugin.prototype, {
        init: function() {

            var $this = $( this.element );

            $this.addClass('select-hidden');
            $this.wrap('<div class="select-wrapper"></div>');
            $this.after('<div class="select-styled"></div>');

            this.build();
        },
        build: function() {

            var $this = $( this.element );

            var $styledSelect = $this.next('.select-styled');
            $styledSelect.text($this.children('option:selected').eq(0).text());

            var $list = $('<ul />', {'class': 'select-options'}).insertAfter($styledSelect);
            var $l = $this.children('option').length;

            for (var i = 0; i < $l; i++) {
                $('<li />', {
                    text: $this.children('option').eq(i).text(),
                    rel: $this.children('option').eq(i).val(),
                    disabled: $this.children('option').eq(i).prop('disabled')
                }).appendTo($list);
            }
            var $listItems = $list.children('li');

            $styledSelect.on('click', function( e ) {
                e.stopPropagation();
                var $styledOptions = $(this).next('ul.select-options');
                if ( $(this).hasClass('is-active') ) {
                    $(this).removeClass('is-active');
                    $styledOptions.removeClass('is-active');
                } else {
                    var $styledOptionsHeight = $(this).outerHeight() * 4.5;
                    $('.select-styled.is-active').not(this).each(function(){
                        $(this).removeClass('is-active');
                        $styledOptions.removeClass('is-active');
                    });

                    var $spaceToExpand = $(window).outerHeight() - ( $(this).offset().top - $(document).scrollTop() ) - $(this).outerHeight();

                    if ( $spaceToExpand < $styledOptionsHeight ) {
                        $(this).parent().addClass('is-inverted');
                    } else {
                        $(this).parent().removeClass('is-inverted');
                    }

                    $(this).addClass('is-active');
                    $styledOptions.addClass('is-active');
                }
            });

            $listItems.each( function() {
                $(this).on('click', function( e ) {
                    e.stopPropagation();
                    if(!$(this)[0].hasAttribute("disabled")){
                        $styledSelect.text($(this).text()).removeClass('is-active').addClass('is-selected');
                        $this.val($(this).attr('rel'));
                        $list.removeClass('is-active');
                        $this.eq($(this).index()).prop('selected',true);
                        $this.trigger('change');
                    }
                });
            });

            $(document).click(function() {
                $styledSelect.removeClass('is-active');
                $list.removeClass('is-active');
            });
        },
        destroy: function() {

            var $this = $( this.element );

            $this.parent().find('.select-styled').remove();
            $this.parent().find('.select-options').remove();
            $this.unwrap();
            $this.removeClass('select-hidden');
        },
        rebuild: function() {
            var $this = $( this.element );

            $this.parent().find('.select-styled').empty();
            $this.parent().find('.select-options').remove();
            this.build();
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
        $(document).find('[gr-form] select').customSelect();
    });

} )( require('jquery'), window, document );



// Custom Radio
// --------------------------------------------------

( function( $, window, document ) {

    "use strict";

    var pluginName = "customRadio";

    function Plugin ( element ) {
        this.element = element;
        this._name = pluginName;
        this.init();
    }

    // Avoid Plugin.prototype conflicts
    $.extend( Plugin.prototype, {
        init: function() {
            $(this.element).addClass('radio-hidden');
            $(this.element).next('label').addBack().wrapAll('<div class="radio-wrapper"></div>');
        },
        destroy: function() {
            $(this.element).unwrap();
        }
    } );

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[ pluginName ] = function( options ) {
        return this.each( function() {
            if ( !$.data( this, "plugin_" + pluginName ) ) {
                $.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
            }
        } );
    };

    $(function () {
        $(document).find('[gr-form] input[type=radio]').customRadio();
    });

} )( require('jquery'), window, document );



// Custom Checkbox
// --------------------------------------------------

( function( $, window, document ) {

    "use strict";

    var pluginName = "customCheckbox";

    function Plugin ( element ) {
        this.element = element;
        this._name = pluginName;
        this.init();
    }

    // Avoid Plugin.prototype conflicts
    $.extend( Plugin.prototype, {
        init: function() {
            $(this.element).addClass('checkbox-hidden');
            $(this.element).next('label').addBack().wrapAll('<div class="checkbox-wrapper"></div>');
        },
        destroy: function() {
            $(this.element).unwrap();
        }
    } );

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[ pluginName ] = function( options ) {
        return this.each( function() {
            if ( !$.data( this, "plugin_" + pluginName ) ) {
                $.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
            }
        } );
    };

    $(function () {
        $(document).find('[gr-form] input[type=checkbox]').customCheckbox();
    });

} )( require('jquery'), window, document );



// Custom Input[type=file]
// --------------------------------------------------

( function( $, window, document ) {

    "use strict";

    var pluginName = "customUpload"

    function Plugin ( element ) {
        this.element = element;
        this._name = pluginName;
        this.init();
    }

    // Avoid Plugin.prototype conflicts
    $.extend( Plugin.prototype, {
        init: function() {
            $(this.element).addClass('input-file-hidden');
            $(this.element).next('label').addBack().wrapAll('<div class="file-upload-wrapper"></div>');
        },
        update: function() {
            if($(this.element).val()!=='') {
                $(this.element).next('label').html($(this.element).val().replace("C:\\fakepath\\", "")).addClass('is-ready');
            }
        },
        destroy: function() {
            $(this.element).unwrap();
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
        $(document).find('[gr-form] input[type=file]').customUpload();
    });
    $(document).find('[gr-form] input[type=file]').on('change', function () {
        $(document).find('[gr-form] input[type=file]').customUpload('update');
    });

} )( require('jquery'), window, document );



// Parsley validation
// --------------------------------------------------

( function( $ ) {

    "use strict";

    $("[data-parsley-validate]").length && $("[data-parsley-validate]").parsley({
        trigger:      'change',
        errorClass: "parsley-error",
        classHandler: function (el) {
            return el.$element.closest('.form-item, .form-item--inline, .form-item--icon-after, .form-item--icon-before');
        },
        errorsContainer: function(pEle) {
            var $err = pEle.$element.closest('.form-item, .form-item--inline, .form-item--icon-after, .form-item--icon-before').append();
            return $err;
        }
    });

} )( require('jquery'), require('../../../../node_modules/parsleyjs/dist/parsley.min.js') );
