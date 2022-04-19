import React from 'react';
import { Button, Form } from 'react-bootstrap';

const CheckOut = () => {
  return (
    <div className='container w-50 mx-auto mt-2 shadow p-3 mb-5 bg-white rounded'>
      <h2 className='text-center'>Please Checkout </h2>

      <div>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicName'>
            <Form.Label>Your Name</Form.Label>
            <Form.Control type='text' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicCard'>
            <Form.Label>Card Number</Form.Label>
            <Form.Control type='number' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Address</Form.Label>
            <Form.Control as='textarea' rows={3} />
          </Form.Group>
          <Button
            className='d-flex justify-content-center align-items-center w-50 mx-auto'
            variant='primary'
            type='submit'
          >
            Confirm Your Order
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CheckOut;
