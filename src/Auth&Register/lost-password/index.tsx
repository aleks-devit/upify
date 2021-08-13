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
import {RegisterLinkToLogin, RegisterSubTitle} from "../register/styles";
import {LostPasswordText} from "./styles";

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
              Lost password
            </RegisterSubTitle>
            <LostPasswordText>
              We will send you an email with a magic recovery link to reset your password.
            </LostPasswordText>
            <SignInInput placeholder='Email Address'/>
            <SignInBtn type='submit'>Send me recovery link</SignInBtn>
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
