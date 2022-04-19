import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const location = useLocation();

  let errorElement;
  let from = location.state?.from?.pathname || '/';

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  if (user) {
    navigate(from, { replace: true });
  }
  if (loading || sending) {
    return <Loading></Loading>;
  }
  if (error) {
    errorElement = (
      <div>
        <p className='text-danger'>Error: {error.message}</p>
      </div>
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  const navigateRegister = (event) => {
    navigate('/register');
  };
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast('Email Sent Successfully');
    } else {
      toast('Enter your email address');
    }
  };

  return (
    <div className='container w-50 mx-auto mt-2 shadow p-3 mb-5 bg-white rounded'>
      <h2 className='text-dark fw-bold text-center mt-2'>Please Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type='email'
            placeholder='Enter your email'
            required
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type='password'
            placeholder='Enter your password'
            required
          />
        </Form.Group>
        <Button variant='primary w-100 mb-2' type='submit'>
          Login
        </Button>
      </Form>
      {errorElement}
      <p>
        Don't have an account?{' '}
        <Link
          to='/register'
          className='text-primary pe-auto text-decoration-none'
          onClick={navigateRegister}
        >
          Sign Up Here
        </Link>{' '}
      </p>
      <p>
        <button
          className='text-danger pe-auto text-decoration-none btn btn-link'
          onClick={resetPassword}
        >
          Forgotten Password?
        </button>
      </p>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;
