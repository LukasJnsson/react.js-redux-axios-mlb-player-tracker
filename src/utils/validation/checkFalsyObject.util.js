
import checkFalsy from "./checkFalsy.util.js";


/**
 * Function that checks if the key values in an object are falsy
 * @param {Object} obj - The object with the keys and values
 * @returns {Object} - The validated object
 */
const checkFalsyObject = (obj) => {
    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [key, checkFalsy(value)])
    );
};


export default checkFalsyObject;