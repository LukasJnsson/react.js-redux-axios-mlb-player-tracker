
/**
 * Function that checks if an value is falsy
 * @param {String|Number} prop - The prop to check
 * @returns {String|Number} - The prop or the default string 'N/A'
 */
const checkFalsy = (prop) => {
    return prop ? prop : 'N/A';
};


export default checkFalsy;