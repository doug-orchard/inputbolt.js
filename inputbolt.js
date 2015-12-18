(function($) {

    $.fn.inputbolt = function(oQSOptions, callBack) {

        // Using a type method I like to follow.
        // All params should begin with the types letter. eg. nQuantity = 'number'
        // $ for jQuery wrap elements.

        var ELEM_UL = '<ul/>',
            ELEM_DIV = '<DIV/>',
            CLASS_WRAPPER = 'wrapper',
            CLASS_LARGE = 'large',
            CLASS_BUTTONS = 'buttongroup',
            CLASS_BUTTON = 'button',
            CLASS_OVERLAY = 'overlay',
            DATA_MIN = 'min',
            DATA_MAX = 'max',
            DATA_ITEMS = 'items',
            DATA_VALUE = 'data-value',
            MAX_PHONE_SIZE = 480,
            FIVE_SECONDS = 5000,
            ACTION_BLUR = 'blur',
            ACTION_CLICK = 'click',
            ACTION_KEYPRESS = 'keypress',
            ACTION_MOUSEDOWN = 'mousedown',
            CLASS_STANDARD = 'qs-',
            TYPEOF_OBJECT = 'object',
            TYPEOF_STRING = 'string';

        // If any changes to the window size occurs close all overlays...
        // possibly not good if you switch orientation...
        window.onresize = closeOverlay;

        // The callback returns the input element that is currently inuse.
        function callTheCallBack($elem) {
            return callBack($elem);
        }

        function inputKeyFunc(eEvent) {
            if (eEvent.keyCode === 13) {
                closeOverlay($(this));
            }
        }

        function inputClickFunc() {

            var $overlay,
                $this = $(this);

            if (doesOverlayExsist($this)) return;

            options = {
                min: $this.data(DATA_MIN),
                max: $this.data(DATA_MAX),
                items: $this.data(DATA_ITEMS),
                width: $this.width()
            }

            $overlay = newOverlay(options).appendTo($this.parent());

            if (isScreenLarge() || !oQSOptions.smallmode) {
                $overlay.addClass(addSelector(CLASS_LARGE));
                window.setTimeout(function() {
                    closeOverlay($this);
                }, FIVE_SECONDS);
            }

        }

        function buttonClickFunc() {
            var $this = $(this);
            $this.parents(addSelector(CLASS_WRAPPER, true)).find('input').val($this.attr(DATA_VALUE));
        }

        function createButton(sValue) {
            return $(ELEM_DIV).addClass(addSelector(CLASS_BUTTON)).attr(DATA_VALUE, sValue).text(sValue);
        }

        function createButtonGroup() {
            return $(ELEM_UL).addClass(addSelector(CLASS_BUTTONS));
        }

        function doesOverlayExsist($elem) {
            return $elem.parent().find(addSelector(CLASS_OVERLAY, true)).length > 0;
        }

        function closeOverlay($elem) {
            $(addSelector(CLASS_OVERLAY, true)).remove();
            if (callBack) {
                callTheCallBack($elem)
            };
        }

        function createButtons(oOptions) {

            var i,
                nMin,
                nMax,
                aItems,
                nGroupWidth,
                $button,
                aGroup = [];

            nGroupWidth = oOptions.width;

            if (typeof oOptions.items === TYPEOF_STRING) {

                aItems = oOptions.items.replace(/'/g, '"');
                aItems = JSON.parse(aItems);

                nMin = 0;
                nMax = aItems.length - 1;

            } else {

                nMin = oOptions.min;
                nMax = oOptions.max;

            }

            for (i = nMin; i <= nMax; i++) {

                var lastNumber = i === nMax ? true : false;
                $button = typeof aItems === TYPEOF_OBJECT ? createButton(aItems[i]) : createButton(i, lastNumber);
                $button.on(ACTION_MOUSEDOWN, buttonClickFunc);
                aGroup.push($button);

            }

            return createButtonGroup()
                .css({
                    minWidth: nGroupWidth,
                    maxWidth: '60%'
                })
                .append(aGroup);
        }

        function overlayClickFunc() {
            $(this).remove();
        }

        function addSelector(sSelector, bAddDot) {
            return (bAddDot ? '.' : '') + CLASS_STANDARD + sSelector;
        }

        function isScreenLarge() {
            return window.innerWidth > MAX_PHONE_SIZE;
        }

        function newOverlay(oOptions) {
            return $(ELEM_DIV)
                .addClass(addSelector(CLASS_OVERLAY))
                .append(createButtons(oOptions))
                .on(ACTION_CLICK, overlayClickFunc);
        }

        // Add conditions to each of the selected input fields.
        this.each(function(nNumber, eElem) {
            var $wrapper,
                $_this,
                $parent;

            $_this = $(eElem);
            $parent = $_this.parent();

            $_this
                .on(ACTION_CLICK, inputClickFunc)
                .on(ACTION_KEYPRESS, inputKeyFunc)
                .on(ACTION_BLUR, function(eElem) {
                    closeOverlay($_this);
                });

            $wrapper = $(ELEM_DIV)
                .addClass(addSelector(CLASS_WRAPPER))
                .append($_this)
                .appendTo($parent);

        });

        return this;

    };

}(jQuery));
