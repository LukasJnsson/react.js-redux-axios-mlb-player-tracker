
import React from 'react';
import useTitle from '../hooks/useTitle';
import useRedirect from '../hooks/useRedirect';


export default function NotFound() {
  useTitle('Not Found');
  
  useRedirect(2000);

  return (
    <div className='not-found'>
        Not Found...
    </div>
  );
};