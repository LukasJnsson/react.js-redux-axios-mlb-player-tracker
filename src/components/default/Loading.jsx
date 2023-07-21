
import React from 'react';
import ReactLoading from 'react-loading';


export default function Loading(props) {

  /**
   * Function that set the size of the loading animation
   * @param {String} size - The size of the animation 
   * @returns {Number} - The size of the loading animation
   */
  const setLoadingSize = (size) => {
    switch
    (size) {
        case 'xsmall':
            return 50;
        case 'small':
            return 100;
        case 'medium':
            return 200;
        case 'large':
            return 400;
        default:
            return 100;
    }};

  return (
    <div className='outer-loading'>
        <ReactLoading type={'bars'} color={'#000'} width={setLoadingSize(props.size)} height={setLoadingSize(props.size)} />
    </div>
  );
};