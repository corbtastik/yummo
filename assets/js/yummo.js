;(function() {

    var yummo = function (config) {
        return {};
    }

    /**
     * A namespace containing utils for the rest of the lunr library
     * @namespace lunr.utils
     */
    yummo.utils = {}

    /**
     * Print a warning message to the console.
     *
     * @param {String} message The message to be printed.
     * @memberOf lunr.utils
     * @function
     */
    lunr.utils.warn = (function (global) {
        /* eslint-disable no-console */
        return function (message) {
            if (global.console && console.warn) {
                console.warn(message)
            }
        }
        /* eslint-enable no-console */
    })(this)

    /**
     * Convert an object to a string.
     *
     * In the case of `null` and `undefined` the function returns
     * the empty string, in all other cases the result of calling
     * `toString` on the passed object is returned.
     *
     * @param {Any} obj The object to convert to a string.
     * @return {String} string representation of the passed object.
     * @memberOf lunr.utils
     */
    lunr.utils.asString = function (obj) {
        if (obj === void 0 || obj === null) {
            return ""
        } else {
            return obj.toString()
        }
    }

    /**
     * Clones an object.
     *
     * Will create a copy of an existing object such that any mutations
     * on the copy cannot affect the original.
     *
     * Only shallow objects are supported, passing a nested object to this
     * function will cause a TypeError.
     *
     * Objects with primitives, and arrays of primitives are supported.
     *
     * @param {Object} obj The object to clone.
     * @return {Object} a clone of the passed object.
     * @throws {TypeError} when a nested object is passed.
     * @memberOf Utils
     */
    lunr.utils.clone = function (obj) {
        if (obj === null || obj === undefined) {
            return obj
        }

        var clone = Object.create(null),
            keys = Object.keys(obj)

        for (var i = 0; i < keys.length; i++) {
            var key = keys[i],
                val = obj[key]

            if (Array.isArray(val)) {
                clone[key] = val.slice()
                continue
            }

            if (typeof val === 'string' ||
                typeof val === 'number' ||
                typeof val === 'boolean') {
                clone[key] = val
                continue
            }

            throw new TypeError("clone is not deep and does not support nested objects")
        }

        return clone
    }
    lunr.FieldRef = function (docRef, fieldName, stringValue) {
        this.docRef = docRef
        this.fieldName = fieldName
        this._stringValue = stringValue
    }

    lunr.FieldRef.joiner = "/"

    lunr.FieldRef.fromString = function (s) {
        var n = s.indexOf(lunr.FieldRef.joiner)

        if (n === -1) {
            throw "malformed field ref string"
        }

        var fieldRef = s.slice(0, n),
            docRef = s.slice(n + 1)

        return new lunr.FieldRef (docRef, fieldRef, s)
    }

    lunr.FieldRef.prototype.toString = function () {
        if (this._stringValue == undefined) {
            this._stringValue = this.fieldName + lunr.FieldRef.joiner + this.docRef
        }

        return this._stringValue
    }
    /*!
     * lunr.Set
     * Copyright (C) 2020 Oliver Nightingale
     */

    /**
     * A lunr set.
     *
     * @constructor
     */
    lunr.Set = function (elements) {
        this.elements = Object.create(null)

        if (elements) {
            this.length = elements.length

            for (var i = 0; i < this.length; i++) {
                this.elements[elements[i]] = true
            }
        } else {
            this.length = 0
        }
    }

    /**
     * A complete set that contains all elements.
     *
     * @static
     * @readonly
     * @type {lunr.Set}
     */
    lunr.Set.complete = {
        intersect: function (other) {
            return other
        },

        union: function () {
            return this
        },

        contains: function () {
            return true
        }
    }

    /**
     * An empty set that contains no elements.
     *
     * @static
     * @readonly
     * @type {lunr.Set}
     */
    lunr.Set.empty = {
        intersect: function () {
            return this
        },

        union: function (other) {
            return other
        },

        contains: function () {
            return false
        }
    }

    /**
     * Returns true if this set contains the specified object.
     *
     * @param {object} object - Object whose presence in this set is to be tested.
     * @returns {boolean} - True if this set contains the specified object.
     */
    lunr.Set.prototype.contains = function (object) {
        return !!this.elements[object]
    }

    /**
     * Returns a new set containing only the elements that are present in both
     * this set and the specified set.
     *
     * @param {lunr.Set} other - set to intersect with this set.
     * @returns {lunr.Set} a new set that is the intersection of this and the specified set.
     */

    lunr.Set.prototype.intersect = function (other) {
        var a, b, elements, intersection = []

        if (other === lunr.Set.complete) {
            return this
        }

        if (other === lunr.Set.empty) {
            return other
        }

        if (this.length < other.length) {
            a = this
            b = other
        } else {
            a = other
            b = this
        }

        elements = Object.keys(a.elements)

        for (var i = 0; i < elements.length; i++) {
            var element = elements[i]
            if (element in b.elements) {
                intersection.push(element)
            }
        }

        return new lunr.Set (intersection)
    }

    /**
     * Returns a new set combining the elements of this and the specified set.
     *
     * @param {lunr.Set} other - set to union with this set.
     * @return {lunr.Set} a new set that is the union of this and the specified set.
     */

    lunr.Set.prototype.union = function (other) {
        if (other === lunr.Set.complete) {
            return lunr.Set.complete
        }

        if (other === lunr.Set.empty) {
            return this
        }

        return new lunr.Set(Object.keys(this.elements).concat(Object.keys(other.elements)))
    }

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
             * only CommonJS-like enviroments that support module.exports,
             * like Node.
             */
            module.exports = factory()
        } else {
            // Browser globals (root is window)
            root.lunr = factory()
        }
    }(this, function () {
        /**
         * Just return a value to define the module export.
         * This example returns an object, but the module
         * can return a function as the exported value.
         */
        return lunr
    }))
})();
