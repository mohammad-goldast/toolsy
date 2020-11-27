'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var object = exports.object = {

    /**
     * 
    * @param {*} obj 
    * Pass your object to isEmpty method
    * and check it is empty.
    * Empty object: {}
    * 
    */
    isEmpty: function isEmpty() {
        var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && !(obj instanceof Array)) {
            if (Object.keys(obj).length === 0) return true;
        }
        return false;
    },

    /**
    * 
    * @param {*} obj 
    * Convert your object to array.
    * toArray({ name: 'toolsy', version: 1 }) => ["toolsy", 1]
    */
    toArray: function toArray() {
        var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return Object.keys(obj).map(function (k) {
            return obj[k];
        });
    }

};