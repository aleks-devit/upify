import type {NextPage} from "next";
import Head from 'next/head'
import Link from 'next/link'
import {
  SignInBody,
  SignInBtn,
  SignInForm,
  SignInHeader,
  SignInInput,
  SignInToMainPage,
  SignInToRegister,
  SignInWrapper,
} from "../login/styles";
import {RegisterLinkToLogin, RegisterSubTitle} from "../register/styles";
import {LostPasswordText} from "../lost-password/styles";

const LostPassword: NextPage = () => {
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
              Resend activation email
            </RegisterSubTitle>
            <LostPasswordText>
              Mails can get lost, but we can send you another activation email for your account.
            </LostPasswordText>
            <SignInInput placeholder='Email Address'/>
            <SignInBtn type='submit'>Send me the activation email</SignInBtn>
          </SignInForm>
          <SignInToRegister>
            <Link href="/login">
              <RegisterLinkToLogin>Return to Login</RegisterLinkToLogin>
            </Link>
          </SignInToRegister>
        </SignInBody>
      </SignInWrapper>
    </>
  )
}

export default LostPassword
