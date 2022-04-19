import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorElement;

  if (loading) {
    return <Loading></Loading>;
  }

  if (error) {
    errorElement = (
      <div>
        <p className='text-danger'>Error: {error.message}</p>
      </div>
    );
  }
  if (user) {
    navigate('/home');
  }
  return (
    <div>
      <div className='d-flex align-items-center'>
        <div style={{ height: '1px' }} className='bg-dark w-50'></div>
        <p className='mt-2 px-2'>or</p>
        <div style={{ height: '1px' }} className='bg-dark w-50'></div>
      </div>
      {errorElement}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className='btn btn-danger  d-block mx-auto my-3'
        >
          <span className='px-2'>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
