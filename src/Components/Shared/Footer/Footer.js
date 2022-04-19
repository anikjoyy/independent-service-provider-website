import React from 'react';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className='container-fluid bg-dark'>
      <div className='row'>
        <div className='text-white text-center mt-2'>
          <p>Contact Us</p>
          <p>
            <small>Address: Rajshahi, Bangladeh</small>
          </p>
          <p>
            <small>Email: adc@mail.com</small>
          </p>
          <p>
            <small>Phone: 017XXXXXXXXXXX</small>
          </p>
        </div>
      </div>
      <div className='text-center text-white mt-2'>
        <small>All rights reserved by Vintage Wedding Shoot, {year}</small>
      </div>
    </div>
  );
};

export default Footer;
