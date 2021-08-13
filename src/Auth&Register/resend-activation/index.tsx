import type {NextPage} from "next";
import Head from 'next/head'
import Link from 'next/link'
import {
  CheckpointBody,
  CheckpointBtn,
  CheckpointForm,
  CheckpointHeader,
  CheckpointInput,
  CheckpointToMainPage,
  CheckpointToRegister,
  CheckpointWrapper,
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
      <CheckpointWrapper>
        <CheckpointBody>
          <CheckpointHeader>
            <Link href='/'>
              <CheckpointToMainPage>
                Upify Analytics
              </CheckpointToMainPage>
            </Link>
          </CheckpointHeader>
          <CheckpointForm>
            <RegisterSubTitle>
              Resend activation email
            </RegisterSubTitle>
            <LostPasswordText>
              Mails can get lost, but we can send you another activation email for your account.
            </LostPasswordText>
            <CheckpointInput placeholder='Email Address'/>
            <CheckpointBtn type='submit'>Send me the activation email</CheckpointBtn>
          </CheckpointForm>
          <CheckpointToRegister>
            <Link href="/login">
              <RegisterLinkToLogin>Return to Login</RegisterLinkToLogin>
            </Link>
          </CheckpointToRegister>
        </CheckpointBody>
      </CheckpointWrapper>
    </>
  )
}

export default LostPassword
