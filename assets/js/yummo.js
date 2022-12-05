;(function() {

    /**
     * A convenience function for configuring and creating yummo module.
     * @param config
     * @returns {{}}
     */
    yummo = function (config) {
        return {};
    };

    /**
     * A namespace containing utils for yummo
     * @namespace yummo.utils
     */
    yummo.utils = {};

    yummo.utils.logging = true;

    /**
     * Print a warning message to the console.
     *
     * @param {String} message The message to be printed.
     * @memberOf yummo.utils
     * @function
     */
    yummo.utils.warn = (function (global) {
        /* eslint-disable no-console */
        return function(message) {
            if (global.console && console.warn && this.logging) {
                console.warn(message);
            }
        }
        /* eslint-enable no-console */
    })(this);

    /**
     * Print an error message to the console.
     *
     * @param {String} message The message to be printed.
     * @memberOf yummo.utils
     * @function
     */
    yummo.utils.error = (function (global) {
        /* eslint-disable no-console */
        return function(message) {
            if (global.console && console.error && this.logging) {
                console.error(message);
            }
        }
        /* eslint-enable no-console */
    })(this);

    /**
     * Print a message to the console.
     *
     * @param {String} message The message to be printed.
     * @memberOf yummo.utils
     * @function
     */
    yummo.utils.log = (function (global) {
        /* eslint-disable no-console */
        return function(message) {
            if (global.console && console.log && this.logging) {
                console.log(message);
            }
        }
        /* eslint-enable no-console */
    })(this);

    /**
     * Convert an object to a string.
     *
     * If `null` or `undefined` return an empty string, otherwise
     * call `toString` on the object and return the result.
     *
     * @param {any} obj The object to convert to a string.
     * @return {String} string representation of the object.
     * @memberOf yummo.utils
     */
    yummo.utils.asString = function(obj) {
        if (obj === void 0 || obj === null) {
            return "";
        } else {
            return obj.toString();
        }
    }

    /**
     * A yummo ImageGrid.
     *
     * @param {string} name for the ImageGrid in dom.
     * @constructor
     */
    yummo.ImageGrid = function(name) {
        this.name = name;
    }

    /**
     * Wrapper function that returns the dom ImageGrid element.
     *
     * @param {string} name of the ImageGrid in dom.
     * @returns {HTMLElement} element containing the ImageGrid.
     */
    yummo.ImageGrid.dom = function(name) {
        return document.getElementById("ig-" + name);
    }

    /**
     * Wrapper function that returns the dom ImageGrid target element.
     *
     * @param {string} name of the ImageGrid target in dom.
     * @returns {HTMLElement} element containing the ImageGrid target.
     */
    yummo.ImageGrid.domTarget = function(name) {
        return document.getElementById("ig-target-" + name);
    }

    yummo.ImageGrid.prototype.openImage = function(imageId) {
        yummo.utils.log("ImageGrid.openImage: " + imageId);
        // Hide the ImageGrid
        yummo.ImageGrid.dom(this.name).style.display = "none";
        // Show the target image from the ImageGrid, hide other images.
        const imageTarget = yummo.ImageGrid.domTarget(this.name);
        const images = imageTarget.getElementsByTagName('img');
        for(let i = 0; i < images.length; i++) {
            const caption = document.getElementById(this.name + "-caption-" + i);
            if(images[i].id === imageId) {
                images[i].style.display = "block";
                caption.style.display = "block";
            } else {
                images[i].style.display = "none";
                caption.style.display = "none";
            }
        }
        imageTarget.classList.toggle("no-display");
        imageTarget.style.display = "block";
    };

    yummo.ImageGrid.prototype.closeImage = function() {
        // TODO does this need to be imageId not this.name?
        yummo.utils.log("ImageGrid.closeImage:" + this.name);
        // Hide images and ig-target
        const imageTarget = yummo.ImageGrid.domTarget(this.name);
        const images = imageTarget.getElementsByTagName('img');
        for(let i = 0; i < images.length; i++) {
            const caption = document.getElementById(this.name + "-caption-" + i);
            caption.style.display = "none";
            images[i].style.display = "none";
        }
        imageTarget.style.display = "none";
        imageTarget.classList.toggle("no-display");
        // Show the grid
        yummo.ImageGrid.dom(this.name).style.display = "block";
    };



    /**
     * export the module via AMD, CommonJS or as a browser global
     * Export code from https://github.com/umdjs/umd/blob/master/returnExports.js
     */
    ;(function (root, factory) {
        if (typeof define === 'function' && define.amd) {
            // AMD. Register as an anonymous module.
            define(factory)
        } else if (typeof exports === 'object') {
            /**
             * Node. Does not work with strict CommonJS, but
             * only CommonJS-like environments that support module.exports,
             * like Node.
             */
            module.exports = factory();
        } else {
            // Browser globals (root is window)
            root.yummo = factory();
        }
    }(this, function () {
        /**
         * Just return a value to define the module export.
         * This example returns an object, but the module
         * can return a function as the exported value.
         */
        return yummo;
    }))
})();
