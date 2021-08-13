import type {NextPage} from "next";
import Head from 'next/head'
import Link from 'next/link'
import {
  SignInAssets,
  SignInBody, SignInBtn,
  SignInToMainPage,
  SignInForm,
  SignInHeader,
  SignInInput,
  SignInLinks,
  SignInRemember, SignInToRegister,
  SignInWrapper,
  SighInLinkRegister,
} from "./styles";

const SignIn: NextPage = () => {
  return(
    <>
      <Head>
        <title>Login - Upify Analytics</title>
        <meta name="description" content="Login - Upify Analytics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SignInWrapper>
        <SignInBody>
          <SignInHeader>
            <Link href='/'>
              <SignInToMainPage>
                Upify Analytics
              </SignInToMainPage>
            </Link>
          </SignInHeader>
          <SignInForm>
            <SignInInput placeholder='Email Address'/>
            <SignInInput placeholder='Password' type='password'/>
            <SignInAssets>
              <SignInRemember>
                <div className="checkbox">
                  <input className="custom-checkbox" type="checkbox" id="color-5" name="color-5" value="green"/>
                    <label htmlFor="color-5">Remember me</label>
                </div>
              </SignInRemember>
              <SignInLinks>
                <Link href="/lost-password">
                  <a>Lost Password </a>
                </Link>
                /
                <Link href="/resend-activation">
                  <a> Resend Activation</a>
                </Link>
              </SignInLinks>
            </SignInAssets>
            <SignInBtn type='submit'>Login</SignInBtn>
          </SignInForm>
          <SignInToRegister>
            Don't have an account?
            <Link href="/register">
              <SighInLinkRegister>Register</SighInLinkRegister>
            </Link>
          </SignInToRegister>
        </SignInBody>
      </SignInWrapper>
    </>
  )
}

export default SignIn
