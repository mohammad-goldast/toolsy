'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var array = exports.array = {
    /**
     *
     * @param {*} array
     * Pass your array to isEmpty method
     * and check it is empty.
     *
     * Empty array: []
     *
     */
    isEmpty: function isEmpty() {
        var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        return Array.isArray(array) && array.length === 0;
    },

    /**
     *
     * @param {*} array
     * Pass your desired array to sort by alphabet for strings and
     * sort by number for numbers.
     *
     * sort([2, 3, 1]);
     * => [ 1, 2, 3]
     */
    sort: function sort() {
        var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        return arr.sort(function (a, b) {
            return a - b;
        });
    },

    /**
     *
     * @param {*} array
     * Pass your desired array and parameter
     * so that the array is arranged according to your wishes.
     *
     * sortByProp([{ number: 2 }, { number: 5 }, { number: 3 }], 'number');
     * => [ { number: 2 }, { number: 3 }, { number: 5 } ]
     */
    sortByProp: function sortByProp() {
        var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var prop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

        return arr.sort(function (a, b) {
            return a[prop] - b[prop];
        });
    }
};

var number = exports.number = {
    /**
     *
     * @param {*} num
     * Pass your number to isNumber method
     * and check it is integer type.
     *
     */
    isNumber: function isNumber() {
        var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

        return (/\d/.test(num)
        );
    },

    /**
     *
     * @param {*} num
     * Pass your number to isEven method
     * and check it is even.
     * Even numbers: n = 2k
     *
     */
    isEven: function isEven() {
        var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

        return num % 2 === 0;
    },

    /**
     *
     * @param {*} num
     * Pass your number to isEven method
     * and check it is even.
     * Even numbers: n = 2k - 1
     *
     */
    isOdd: function isOdd() {
        var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

        return num % 2 !== 0;
    },

    /**
     *
     * @param {*} num
     *  Pass your desired number to the putCommas method
     *  and deliver it with a comma between each 3-digit piece.
     *  putCommas(12345);
     *  => 12,345
     */
    putCommas: function putCommas() {
        var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

        if (typeof num === 'undefined') return num;
        if (typeof num === 'number') num = num.toString();
        return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },

    /**
     *
     * @param {*} num
     *  Pass your desired Arabic (or similar languages) number to the toEnglish method
     *  and deliver it with a English digits as integer type.
     *  toEnglish('۱۲۳۴۵');
     *  => 12345
     */
    toEnglish: function toEnglish() {
        var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '۱';

        var charCodeZero = '۰'.charCodeAt(0);
        return num.replace(/[۰-۹]/g, function (w) {
            return w.charCodeAt(0) - charCodeZero;
        });
    },

    /**
     *
     * @param {*} num
     *  Pass your desired English (or similar languages) number to the toArabic method
     *  and deliver it with a Arabic digits as string type.
     *  toArabic(12345);
     *  => '۱۲۳۴۵'
     */
    toArabic: function toArabic() {
        var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

        var charCodeZero = '۰'.charCodeAt(0);
        return String(num).replace(/[0-9]/g, function (w) {
            return String.fromCharCode(w.charCodeAt(0) + charCodeZero - 48);
        });
    }
};

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