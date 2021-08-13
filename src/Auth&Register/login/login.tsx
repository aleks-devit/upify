import type {NextPage} from "next";
import Head from 'next/head'
import Link from 'next/link'
import {
  CheckpointAssets,
  CheckpointBody, CheckpointBtn,
  CheckpointToMainPage,
  CheckpointForm,
  CheckpointHeader,
  CheckpointInput,
  CheckpointRemember, CheckpointToRegister,
  CheckpointWrapper,
  CheckpointLinkRegister,
} from "./styles";
import React from "react";
import Alert from "../../Alert";

interface SignInInterface{
  changeEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
  changePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  alert: string;
  setAlert: (item: string) => void
}

const SignIn: NextPage<SignInInterface> = ({changeEmail, changePassword, onSubmit, alert, setAlert}) => {
  return(
    <>
      <Head>
        <title>Login - Upify Analytics</title>
        <meta name="description" content="Login - Upify Analytics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CheckpointWrapper>
        <CheckpointBody>
          <CheckpointHeader>
            <Link href='/'>
              <CheckpointToMainPage>
                Upify Analytics
              </CheckpointToMainPage>
            </Link>
          </CheckpointHeader>
          <CheckpointForm onSubmit={onSubmit}>
            <Alert text={alert} setAlert={setAlert}/>
            <CheckpointInput onChange={(e) => changeEmail(e)} required  placeholder='Email Address'/>
            <CheckpointInput onChange={(e) => changePassword(e)} required  placeholder='Password' type='password'/>
            <CheckpointAssets>
              <CheckpointRemember>
                <div className="checkbox">
                  <input className="custom-checkbox" type="checkbox" id="color-5" name="color-5" value="green"/>
                    <label htmlFor="color-5">Remember me</label>
                </div>
              </CheckpointRemember>
              <div>
                <Link href="/lost-password">
                  <a>Lost Password </a>
                </Link>
                /
                <Link href="/resend-activation">
                  <a> Resend Activation</a>
                </Link>
              </div>
            </CheckpointAssets>
            <CheckpointBtn type='submit'>Login</CheckpointBtn>
          </CheckpointForm>
          <CheckpointToRegister>
            Don't have an account?
            <Link href="/register">
              <CheckpointLinkRegister>Register</CheckpointLinkRegister>
            </Link>
          </CheckpointToRegister>
        </CheckpointBody>
      </CheckpointWrapper>
    </>
  )
}

export default SignIn
