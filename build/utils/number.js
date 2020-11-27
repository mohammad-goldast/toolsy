'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
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