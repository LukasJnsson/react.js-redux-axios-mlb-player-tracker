
/**
 * Function that capitalize the first letter of a string
 * @param {String} string - The string to capitalize
 * @returns {String} - The capitalized string
 */
export const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};


export default capitalizeFirstLetter;