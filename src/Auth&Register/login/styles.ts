import styled from 'styled-components'

export const SignInWrapper = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  padding: 50px 0;
  `

export const SignInBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 440px;
  width: 100%;
  padding: .25rem;
  `

export const SignInHeader = styled.h1`
  margin-bottom: 30px;
  `

export const SignInToMainPage = styled.a`
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
`

export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 25px;
  padding: 1.25rem;
  `

export const SignInInput = styled.input`
  font-size: .9rem;
  transition: border .3s linear;
  height: 40px;
  padding: 8px;
  line-height: 1.5;
  border-radius: .3rem;
  border: 1px solid #dde4ee;
  width: 100%;
  margin-bottom: 15px;
  color: #728197;
  &:focus{
    outline:none;
    box-shadow: 0 0 0 3px rgb(17 85 212 / 25%);
  }
  `

export const SignInAssets = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  color: #728197;
  font-size: 80%;
  font-weight: 400;
  margin-bottom: 20px;
  justify-content: space-between;
  
  a{
    color: #728197;
    &:hover{
      text-decoration: underline !important;
    }
  }
  `

export const SignInRemember = styled.div`
  display: flex;
  align-items: center;
  `


export const SignInLabel = styled.label`
  margin-left: 5px;
`


export const SignInLinks = styled.div`
  
  `

export const SignInBtn = styled.button`
  display: block;
  width: 100%;
  color: #ffffff;
  background: #6A67CE;
  outline: none;
  padding: .5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: .3rem;
  border: none;
  transition: background-color .3s;
  
  &,
  &:active,
  &:focus {
    outline: none;
  }
  
  &:hover{
    background-color: #1155d4;
  }
  `

export const SignInToRegister = styled.div`
  color: #2d3748;
  `

export const SighInLinkRegister = styled.a`
  color: #6A67CE;
  transition: color .3s linear;
  font-weight: 500;
  margin-left: 5px;
  
  &:hover{
    text-decoration: underline !important;
  }
  `