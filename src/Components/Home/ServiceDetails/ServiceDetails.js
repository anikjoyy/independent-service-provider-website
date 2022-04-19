import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
  const { serviceId } = useParams();
  return (
    <div className='container mt-2 mb-5'>
      <h2 className='text-center text-dark'>Details Page</h2>
      <h4 className='text-center text-danger'>
        Your package Id is: {serviceId}
      </h4>
      <div className='text-center mt-3'>
        <Link to='/checkout'>
          <button className='btn btn-primary'>Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;
