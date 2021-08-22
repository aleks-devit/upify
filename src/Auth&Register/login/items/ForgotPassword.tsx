import React from 'react';
import Link from "next/link";

const ForgotPassword = () => {
  return (
      <div className='d-flex justify-content-between mt-n5'>
        <div className='d-flex flex-stack mb-2'>
          {/* begin::Label */}
          <label className='form-label fw-bolder text-dark fs-6 mb-0'>Password</label>
          {/* end::Label */}
          {/* begin::Link */}
          <Link
            href='/auth/forgot-password'

          >
            <a className='link-primary fs-6 fw-bolder'
               style={{marginLeft: '5px'}}>
              Forgot Password ?
            </a>

          </Link>
          {/* end::Link */}
        </div>
      </div>
  );
};

export default ForgotPassword;