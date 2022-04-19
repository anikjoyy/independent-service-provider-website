import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../Firebase/firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate('/login');
  };

  if (loading || updating) {
    return <Loading></Loading>;
  }

  if (user) {
    console.log('user', user);
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log('updated profile');
    navigate('/home');
  };

  return (
    <div className='container register-form shadow p-3 mb-5 bg-white rounded'>
      <div className='mb-3'>
        <h2 className='text-dark fw-bold' style={{ textAlign: 'center' }}>
          Sign Up Here
        </h2>
      </div>
      <form onSubmit={handleRegister}>
        <input
          type='text'
          name='name'
          id='name'
          placeholder='Enter your name'
        />

        <input
          type='email'
          name='email'
          id='email'
          placeholder='Enter your email address'
          required
        />

        <input
          type='password'
          name='password'
          id='password'
          placeholder='Enter your password'
          required
        />
        <input
          onClick={() => setAgree(!agree)}
          type='checkbox'
          name='terms'
          id='terms'
        />
        <label
          className={agree ? 'ps-2 text-primary' : 'ps-2 text-danger'}
          htmlFor='terms'
        >
          Accept Terms & Conditions
        </label>
        <input
          disabled={!agree}
          className='bg-primary mt-2'
          type='submit'
          value='Signup'
        />
      </form>
      <p>
        Already have an account?{' '}
        <Link
          to='/login'
          className='text-danger pe-auto text-decoration-none'
          onClick={navigateLogin}
        >
          Please Login
        </Link>{' '}
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
