import { gql } from 'apollo-boost';

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
    token
    }
  }
`

export const SIGN_IN = gql`
  mutation SignIn(
    $email: String!
    $password: String!
  ) {
    signIn(input: {
      email: $email
      password: $password
    }) {
      _id
      name
      role
    }
  }
`

export const SIGN_OUT = gql`mutation SignOut{ signOut }`

export const GET_USER = gql`
  query User {
    user {
      _id
      firstname
      role
    }
  }
`
// AUTH QUERIES END ----------------------------

// AUTH ADMIN QUERIES START ----------------------------

export const SIGN_UP_ADMIN = gql`
  mutation SignUpAdmin(
    $firstname: String!
    $lastname: String!
    $email: String!
    $password: String!
    $passwordConfirmation: String!
  ) {
    signUpAdmin(input: {
      firstname: $firstname
      lastname: $lastname
      email: $email
      password: $password
      passwordConfirmation: $passwordConfirmation
    })
  }
`

export const SIGN_IN_ADMIN = gql`
  mutation SignInAdmin(
    $email: String!
    $password: String!
  ) {
    signInAdmin(input: {
      email: $email
      password: $password
    }) {
      _id
      firstname
      role
    }
  }
`

export const SIGN_OUT_ADMIN = gql`mutation SignOutAdmin{ signOut }`

export const GET_ADMIN = gql`
  query Admin {
    admin {
      _id
      firstname
      role
    }
  }
`
// AUTH ADMIN QUERIES END ----------------------------



