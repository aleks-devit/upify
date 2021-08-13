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
  CheckpointLinks,
  CheckpointRemember, CheckpointToRegister,
  CheckpointWrapper,
  CheckpointLinkRegister,
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
              Lost password
            </RegisterSubTitle>
            <LostPasswordText>
              We will send you an email with a magic recovery link to reset your password.
            </LostPasswordText>
            <CheckpointInput placeholder='Email Address'/>
            <CheckpointBtn type='submit'>Send me recovery link</CheckpointBtn>
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
