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

