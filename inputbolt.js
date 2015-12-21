(function($) {

    $.fn.inputbolt = function(oQSOptions, callBack) {

        // Using a type method I like to follow.
        // All params should begin with the types letter. eg. nQuantity = 'number'
        // $ for jQuery wrap elements.

        var delay,
            ELEM_UL = '<ul/>',
            ELEM_DIV = '<DIV/>',
            CLASS_WRAPPER = 'wrapper',
            CLASS_LARGE = 'large',
            CLASS_BUTTONS = 'buttongroup',
            CLASS_BUTTON = 'button',
            CLASS_OVERLAY = 'overlay',
            CLASS_STANDARD = 'qs-',
            ELEMENT_INPUT = 'input',
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
            ACTION_MOUSELEAVE = 'mouseleave',
            ACTION_MOUSEENTER = 'mouseenter',
            TYPEOF_OBJECT = 'object',
            TYPEOF_STRING = 'string',
            STRING_ERROR_MESSAGE = 'Error: Missing required data for inputbolt to work.';

        // If any changes to the window size occurs close all overlays...
        // possibly not good if you switch orientation...
        window.onresize = closeOverlay;

        // The callback returns the input element that is currently inuse.
        function callTheCallBack($elem) {
            return callBack($elem);
        }

        function inputBlurFunc() {
            closeOverlay($(this));
        }

        function inputKeyFunc(eEvent) {
            if (eEvent.keyCode === 13) {
                closeOverlay($(this));
            }
        }

        function mouseEnterWrapperFunc() {
            clearTimeout(delay);
        }

        function mouseLeaveWrappeFunc() {
            delay = window.setTimeout(function() {
                closeOverlay($(this).find(ELEMENT_INPUT));
            }, FIVE_SECONDS);
        }

        function inputClickFunc() {

            var options = {},
                $overlay,
                $this = $(this);

            if (doesOverlayExsist($this)) return;

            if (oQSOptions) {

                if (oQSOptions.min !== undefined && oQSOptions.max !== undefined) {
                    options.min = oQSOptions.min;
                    options.max = oQSOptions.max;
                } else if (oQSOptions.items !== undefined) {
                    options.items = oQSOptions.items;
                }

            } else {

                options.min = parseInt($this.data(DATA_MIN));
                options.max = parseInt($this.data(DATA_MAX));
                options.items = $this.data(DATA_ITEMS);

            }

            options.width = $this.width();

            $overlay = newOverlay(options).appendTo($this.parent());

            if (isScreenLarge() || !oQSOptions.smallmode) {

                $overlay.addClass(addSelector(CLASS_LARGE));

            }

        }

        function buttonClickFunc() {
            var $this = $(this);
            $this.parents(addSelector(CLASS_WRAPPER, true)).find(ELEMENT_INPUT).val($this.attr(DATA_VALUE));
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

            } else if (typeof oOptions.items === TYPEOF_OBJECT) {

                nMin = 0;
                nMax = oOptions.items.length - 1;
                aItems = oOptions.items;

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

            var CssStyles = {
                minWidth: nGroupWidth,
                maxWidth: '60%'
            }

            return createButtonGroup()
                .css(CssStyles)
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

        function validateOptions($elem) {

            if ($elem.data(DATA_MIN) !== undefined && $elem.data(DATA_MAX) !== undefined) {
                return true;
            } else if ($elem.data(DATA_ITEMS) !== undefined) {
                return true;
            } else if (oQSOptions && oQSOptions.min !== undefined && !oQSOptions.max !== undefined) {
                return true;
            } else if (oQSOptions && oQSOptions.items !== undefined) {
                return true;
            }
            console.error(STRING_ERROR_MESSAGE);
            return false;
        }

        function newOverlay(oOptions) {
            return $(ELEM_DIV)
                .addClass(addSelector(CLASS_OVERLAY))
                .append(createButtons(oOptions))
                .on(ACTION_CLICK, overlayClickFunc);
        }

        // Add conditions to each of the selected input fields.
        this.each(function(nInt, eElem) {
            var $wrapper,
                $_this,
                $parent;

            $_this = $(eElem);
            $parent = $_this.parent();

            if (!validateOptions($_this)) return;

            $_this
                .on(ACTION_CLICK, inputClickFunc)
                .on(ACTION_KEYPRESS, inputKeyFunc)
                .on(ACTION_BLUR, inputBlurFunc);

            $wrapper = $(ELEM_DIV)
                .addClass(addSelector(CLASS_WRAPPER))
                .on(ACTION_MOUSELEAVE, mouseLeaveWrappeFunc)
                .on(ACTION_MOUSEENTER, mouseEnterWrapperFunc)
                .append($_this)
                .appendTo($parent);

        });

        return this;

    };

}(jQuery));
