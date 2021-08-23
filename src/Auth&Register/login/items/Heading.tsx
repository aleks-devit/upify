import React from 'react';
import Link from "next/link";

const Heading = () => {
  return (
    <div>
      {/* begin::Heading */}
      <div className='text-center mb-10'>
        <h1 className='text-dark mb-3'>Sign In to App</h1>
        <div className='text-gray-400 fw-bold fs-4'>
          New Here?{' '}
          <Link href='/register' >
            <a className='link-primary fw-bolder'>
              Create an Account
            </a>
          </Link>
        </div>
      </div>
      {/* begin::Heading */}
    </div>
  );
};

export default Heading;