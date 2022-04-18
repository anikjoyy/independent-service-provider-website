import React from 'react';
import NotFoundImage from '../../../Images/notFound/not-found.png';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className='error-container'>
      <img src={NotFoundImage} alt='' />
    </div>
  );
};

export default NotFound;
