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