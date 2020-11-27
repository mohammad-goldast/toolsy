'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
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