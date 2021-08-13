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
import {RegisterSubTitle, RegisterLinkToLogin, RegisterAssets, RegisterAssetsLink} from "./styles";

const Register: NextPage = () => {
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
              Register
            </RegisterSubTitle>
            <CheckpointInput placeholder='Your full name'/>
            <CheckpointInput placeholder='Email Address'/>
            <CheckpointInput placeholder='Password' type='password'/>
            <RegisterAssets>
              <CheckpointRemember>
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
              </CheckpointRemember>
            </RegisterAssets>
            <CheckpointBtn type='submit'>Register</CheckpointBtn>
          </CheckpointForm>
          <CheckpointToRegister>
            <Link href="/login">
              <RegisterLinkToLogin>Already have an account?</RegisterLinkToLogin>
            </Link>
          </CheckpointToRegister>
        </CheckpointBody>
      </CheckpointWrapper>
    </>
  )
}

export default Register
