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
} from "../login/styles";
import {RegisterSubTitle, RegisterLinkToLogin, RegisterAssets, RegisterAssetsLink} from "./styles";

const Register: NextPage = () => {
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
            <RegisterSubTitle>
              Register
            </RegisterSubTitle>
            <SignInInput placeholder='Your full name'/>
            <SignInInput placeholder='Email Address'/>
            <SignInInput placeholder='Password' type='password'/>
            <RegisterAssets>
              <SignInRemember>
                <div className="checkbox">
                  <input className="custom-checkbox" type="checkbox" id="color-5" name="color-5" value="green"/>
                  <label htmlFor="color-5">
                    <div>
                      I confirm that I have read and understood the
                      <Link href='/'>
                        <RegisterAssetsLink>
                          Terms and Conditions
                        </RegisterAssetsLink>
                      </Link>
                      and
                      <Link href='/'>
                        <RegisterAssetsLink>
                          Privacy Policy
                        </RegisterAssetsLink>
                      </Link>
                      of the site.
                    </div>
                  </label>
                </div>
              </SignInRemember>
            </RegisterAssets>
            <SignInBtn type='submit'>Register</SignInBtn>
          </SignInForm>
          <SignInToRegister>
            <Link href="/login">
              <RegisterLinkToLogin>Already have an account?</RegisterLinkToLogin>
            </Link>
          </SignInToRegister>
        </SignInBody>
      </SignInWrapper>
    </>
  )
}

export default Register
