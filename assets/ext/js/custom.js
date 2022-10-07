/**
 * rainbowify links
 **/
(function (window, document) {
    // execute javascript in strict mode
    'use strict';
    let hoveredLink;

    // ---------- sparkle and shine ---------- //

    function SparkleShineLink(element) {
        this.element = element;
        this.chars = element.querySelectorAll('.char');
        this.charsLength = this.chars.length;
        // return if there are no chars
        if (!this.charsLength) {
            return;
        }
        this.endIndex = 0;
        this.startIndex = 0;
        this.hueIndex = Math.floor(Math.random() * 360);
        this.colors = [];
        this.isHovered = true;
        this.isSparkling = true;
        this.sparkle();
        // only one hoverLink at a time
        hoveredLink = element;
        // detect when the hover is over
        document.addEventListener('mouseover', this, false);
    }

    // ---------- event handlers ---------- //

    SparkleShineLink.prototype.handleEvent = function (event) {
        let method = event.type + 'Handler';
        if (this[method]) {
            this[method](event);
        }
    };

    SparkleShineLink.prototype.mouseoverHandler = function (event) {
        if (this.element.contains(event.target)) {
            return;
        }
        this.isHovered = false;
        hoveredLink = null;
        document.removeEventListener('mouseover', this, false);
    };

    // ---------- actions ---------- //

    SparkleShineLink.prototype.sparkle = function () {
        this.endIndex = Math.min(this.endIndex + 1, this.charsLength);

        // add colors
        let hue = (this.hueIndex * 10) % 360;
        let nextColor = this.isHovered ? 'hsl(' + hue + ', 100%, 50% )' : 'white';
        // move next color to the front
        this.colors.unshift(nextColor);
        // change colors of characters
        for (let i = this.startIndex; i < this.endIndex; i++) {
            this.chars[i].style.color = this.colors[i];
        }

        if (this.isHovered) {
            this.hueIndex++;
        } else {
            // increment startIndex, so that rainbow runs through rest of chars
            this.startIndex = Math.min(this.startIndex + 1, this.charsLength);
        }

        // stop sparkling if there are no more chars to change
        this.isSparkling = this.startIndex !== this.charsLength;

        // keep sparkling
        if (this.isSparkling) {
            requestAnimationFrame(this.sparkle.bind(this));
        }
    };

    // ---------- events ---------- //

    /**
     * Rainbowify link when the mouse hovers over it.
     */
    function onMouseover(event) {
        let link = getTaggedElement(event.target, 'a');
        if (!link || link === hoveredLink) {
            return;
        }

        new SparkleShineLink(link);
    }

    /**
     * Checks if elem matches a tag
     * @param element Element
     * @param tag String - 'a', 'span'
     **/
    function getTaggedElement(element, tag) {
        // walk up DOM, see if elem is <a>
        while ( element.nodeType !== 9 ) {
            if ( element.nodeName.toLowerCase() === tag ) {
                return element;
            }
            element = element.parentNode;
        }
        return false;
    }

    // Add event listener for mouseover to trigger rainbowify on a link
    document.addEventListener( 'mouseover', onMouseover, false );

})(window, document);