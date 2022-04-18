import React from 'react';

const Service = ({ service }) => {
  const { id, name, price, img, description } = service;
  return (
    <div className='g-4 col-sm-12 col-md-6 col-lg-4'>
      <div class='card h-100' style={{ width: '18rem' }}>
        <img src={img} class='card-img-top' alt='...' />
        <div class='card-body'>
          <h5 class='card-title'>Name: {name}</h5>
          <h6 className='card-title'>Price: {price}$</h6>
          <p class='card-text'>Details: {description}</p>
        </div>
        <div class='card'>
          <a href='#' className='btn btn-primary'>
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Service;
