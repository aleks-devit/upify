import styled from 'styled-components'
import {CheckpointAssets} from "../login/styles";

export const RegisterSubTitle = styled.div`
  width: 100%;
  font-size: 1.5rem;
  margin-bottom: .80rem;
  `

export const RegisterLinkToLogin = styled.a`
  color: #728197;
  
  &:hover{
    color: #728197;
    text-decoration: underline !important; 
  }
  `

export const RegisterAssets = styled(CheckpointAssets)`
  label{
    align-items: flex-start;
    
    &:before{
      margin-top: 3px;
    }
  }
`

export const RegisterAssetsLink = styled.a`
  color: #6A67CE !important;
  margin: 0 4px;
  
  &:hover{
    color: #0b398e !important;
  }
`


