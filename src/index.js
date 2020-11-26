export const array = {
    /**
     *
     * @param {*} array
     * Pass your array to isEmpty method
     * and check it is empty.
     *
     * Empty array: []
     *
     */
    isEmpty: (array = []) => {
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
    sort: (arr = []) => {
        return arr.sort((a, b) => a - b);
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
    sortByProp: (arr = [], prop = '') => {
        return arr.sort((a, b) => a[prop] - b[prop]);
    },
};

export const number = {
    /**
     *
     * @param {*} num
     * Pass your number to isNumber method
     * and check it is integer type.
     *
     */
    isNumber: (num = 1) => {
        return /\d/.test(num);
    },

    /**
     *
     * @param {*} num
     * Pass your number to isEven method
     * and check it is even.
     * Even numbers: n = 2k
     *
     */
    isEven: (num = 1) => {
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
    isOdd: (num = 1) => {
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
    putCommas: (num = 1) => {
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
    toEnglish: (num = '۱') => {
        const charCodeZero = '۰'.charCodeAt(0);
        return num.replace(/[۰-۹]/g, (w) => w.charCodeAt(0) - charCodeZero);
    },

    /**
     *
     * @param {*} num
     *  Pass your desired English (or similar languages) number to the toArabic method
     *  and deliver it with a Arabic digits as string type.
     *  toArabic(12345);
     *  => '۱۲۳۴۵'
     */
    toArabic: (num = 1) => {
        const charCodeZero = '۰'.charCodeAt(0);
        return String(num).replace(/[0-9]/g, w =>
            String.fromCharCode(w.charCodeAt(0) + charCodeZero - 48)
        );
    },
};

export const object = {

    /**
     * 
    * @param {*} obj 
    * Pass your object to isEmpty method
    * and check it is empty.
    * Empty object: {}
    * 
    */
    isEmpty: (obj = {}) => {
        if (typeof obj === 'object' && !(obj instanceof Array)) {
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
    toArray: (obj = {}) => {
        return Object.keys(obj).map(k => obj[k])
    },

}