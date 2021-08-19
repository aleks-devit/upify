/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC, useState} from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { useForm } from 'react-hook-form'


interface LoginInterface {
  loading: boolean
  onSubmit: any
}

const Login: FC<LoginInterface> = ({onSubmit, loading}) => {
  const { handleSubmit, register } = useForm();


  return (
    <form
      className='form w-100'
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      id='kt_login_signin_form'
    >
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

      {/* begin::Form group */}
      <div className='fv-row mb-10'>
        <label className='form-label fs-6 fw-bolder text-dark'>Email</label>
        <input
          placeholder='Email'
          ref={register}
          className={clsx(
            'form-control form-control-lg form-control-solid' )}
          type='email'
          name='email'
          autoComplete='off'
        />
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className='fv-row mb-10'>
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
        <input
          type='password'
          ref={register}
          name='password'
          autoComplete='off'
          className={clsx(
            'form-control form-control-lg form-control-solid' )}
        />
      </div>
      {/* end::Form group */}

      {/* begin::Action */}
      <div className='text-center'>
        <button
          type='submit'
          id='kt_sign_in_submit'
          className='btn btn-lg btn-primary w-100 mb-5'
        >
          {!loading && <span className='indicator-label'>Continue</span>}
          {loading && (
            <span className='indicator-progress' style={{display: 'block'}}>
              Please wait...
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button>

      </div>
      {/* end::Action */}
    </form>
  )
}

export default Login