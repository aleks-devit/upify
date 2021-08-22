import React, {FC} from 'react'
import {useForm} from 'react-hook-form'
import Action from "./items/Action";
import Heading from "./items/Heading";
import clsx from "clsx";
import ForgotPassword from "./items/ForgotPassword";
import {email, password} from "../ListErrors";
import {setStatusInput} from "../../helpers/setStatusInput";

interface IFormInputs {
  email: string
  password: string
}

interface LoginInterface {
  loading: boolean
  onSubmit: any
}

const Login: FC<LoginInterface> = ({onSubmit, loading}) => {
  const { handleSubmit, register, errors } = useForm<IFormInputs>({ });

  return (
    <form
      className='form w-100'
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      id='kt_login_signin_form'
    >
      <Heading/>
      {/* begin::Form group */}
      <div className='fv-row mb-10'>
        <label className='form-label fs-6 fw-bolder text-dark'>Email</label>
        <input
          ref={register({ ...email })}
          placeholder='Email'
          className={clsx(
            'form-control form-control-lg form-control-solid', setStatusInput(errors.email))}
          type='text'
          name='email'
          id='email'
        />
        {<p className='text-danger mt-2'>{errors?.email?.message }</p>}
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className='fv-row mb-10'>
        <ForgotPassword/>
        <input
          ref={register( {...password })}
          type='password'
          name='password'
          placeholder="Password"
          autoComplete="on"
          id='password'
          required
          className={clsx(
            'form-control form-control-lg form-control-solid', setStatusInput(errors.password) )}
        />
        {<p className='text-danger mt-2'>{errors?.password?.message }</p>}
      </div>
      {/* end::Form group */}
      <Action loading={loading}/>
    </form>
  )
}

export default Login