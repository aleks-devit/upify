import {gql} from 'apollo-boost';

// AUTH QUERIES START ----------------------------


export const SIGN_UP = gql`
  mutation createUser(
    $name: String!
    $email: String!
    $password: String!
  ) {
    createUser(input: {
      name: $name
      email: $email
      password: $password
    }) {
    Token
    }
  }
`

export const SIGN_IN = gql`
  mutation login(
    $password: String!
    $email: String!
  ) {
    login(
      password: $password
      email: $email
    ) {
      token
    }
  }
`

export const SIGN_OUT = gql`mutation SignOut{ signOut }`

export const GET_USER = gql`
  query currentUser {
    currentUser {
      is_admin
    }
  }
`
// AUTH QUERIES END ----------------------------

// AUTH ADMIN QUERIES START ----------------------------

export const SIGN_IN_ADMIN = gql`
  mutation adminLogin(
    $email: String!
    $password: String!
  ) {
    adminLogin(
      email: $email
      password: $password
    ) {
      token
    }
  }
`

export const GET_ADMIN_USER = gql`
  query getAdminUsers {
    getAdminUsers {
      id
      email
      name
    }
  }
`

export const GET_MERCHANT_USER = gql`
  query getMerchantUsers {
    getMerchantUsers {
      id
      email
      name
      total_logins
    }
  }
`

export const GET_TOKEN = gql`
  query Token{
    token{
    token
    }
  }
`
// AUTH ADMIN QUERIES END ----------------------------



