/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import clsx from 'clsx'
// import * as auth from '../redux/AuthRedux'
// import {register} from '../redux/AuthCRUD'
import Link from 'next/link'
import { useForm } from 'react-hook-form';
//import {toAbsoluteUrl} from '../../../../_metronic/helpers'





export function Registration({onSubmit}) {
  const { register, handleSubmit } = useForm();

  return (
    <form
      className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
      noValidate
      id='kt_login_signup_form'
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* begin::Heading */}
      <div className='mb-10 text-center'>
        {/* begin::Title */}
        <h1 className='text-dark mb-3'>Create an Account</h1>
        {/* end::Title */}

        {/* begin::Link */}
        <div className='text-gray-400 fw-bold fs-4'>
          Already have an account?
          <Link href='/login'>
            <a className='link-primary fw-bolder' style={{marginLeft: '5px'}}>
              Forgot Password ?
            </a>
          </Link>
        </div>
        {/* end::Link */}
      </div>
      {/* end::Heading */}

      <div className='d-flex align-items-center mb-10'>
        <div className='border-bottom border-gray-300 mw-50 w-100'></div>
        <span className='fw-bold text-gray-400 fs-7 mx-2'>OR</span>
        <div className='border-bottom border-gray-300 mw-50 w-100'></div>
      </div>


      {/* begin::Form group Firstname */}
      <div className='row fv-row mb-7'>
        <div className='col-xl-12'>
          <label className='class="form-label fw-bolder text-dark fs-6'>Name</label>
          <input
            ref={register}
            placeholder='Name'
            type='text'
            name='name'
            autoComplete='off'
            className={clsx(
              'form-control form-control-lg form-control-solid',
            )}
          />
        </div>

        {/* end::Form group */}
      </div>
      {/* end::Form group */}

      {/* begin::Form group Email */}
      <div className='fv-row mb-7'>
        <label className='form-label fw-bolder text-dark fs-6'>Email</label>
        <input
          ref={register}
          placeholder='Email'
          name="email"
          type='email'
          autoComplete='off'
          className={clsx(
            'form-control form-control-lg form-control-solid',
          )}
        />
      </div>
      {/* end::Form group */}

      {/* begin::Form group Password */}
      <div className='mb-10 fv-row' data-kt-password-meter='true'>
        <div className='mb-1'>
          <label className='form-label fw-bolder text-dark fs-6'>Password</label>
          <div className='position-relative mb-3'>
            <input
              ref={register}
              name="password"
              type='password'
              placeholder='Password'
              autoComplete='off'
              className={clsx(
                'form-control form-control-lg form-control-solid',
              )}
            />
          </div>
        </div>
      </div>
      {/* end::Form group */}

      {/* begin::Form group Confirm password */}
      {/*<div className='fv-row mb-5'>*/}
      {/*  <label className='form-label fw-bolder text-dark fs-6'>Confirm Password</label>*/}
      {/*  <input*/}
      {/*    ref={register}*/}
      {/*    name="passwordConfirmation"*/}
      {/*    type='password'*/}
      {/*    placeholder='Password confirmation'*/}
      {/*    autoComplete='off'*/}
      {/*    className={clsx(*/}
      {/*      'form-control form-control-lg form-control-solid',*/}
      {/*    )}*/}
      {/*  />*/}
      {/*</div>*/}
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className='fv-row mb-10'>
        <div className='form-check form-check-custom form-check-solid'>
          <input
            className='form-check-input'
            type='checkbox'
            id='kt_login_toc_agree'
          />
          <label
            className='form-check-label fw-bold text-gray-700 fs-6'
            htmlFor='kt_login_toc_agree'
          >
            I Agree the{' '}
            <Link href='/auth/terms'>
              <a  className='ms-1 link-primary'>
                terms and conditions
              </a>
            </Link>
            .
          </label>
        </div>
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className='text-center'>
        <button
          type='submit'
          id='kt_sign_up_submit'
          className='btn btn-lg btn-primary w-100 mb-5'
        >
          {<span className='indicator-label'>Submit</span>}
        </button>
        <Link href='/login'>
          <a className='btn btn-lg btn-light-primary w-100 mb-5'>
            Cancel
          </a>
        </Link>
      </div>
      {/* end::Form group */}
    </form>
  )
}
