import {useLazyQuery, useMutation, useQuery} from '@apollo/react-hooks';
import { GET_USER, SIGN_IN, SIGN_IN_ADMIN, SIGN_OUT, GET_ADMIN_USER, GET_MERCHANT_USER} from 'apollo/queries'

// Auth actions start -----------------------

export const useSignIn = () => useMutation(SIGN_IN, {
  update(cache, { data: { signIn: signedInUser }}) {
    cache.writeQuery({
      query: GET_USER,
      data: { user: signedInUser }
    })
  }
})

export const useSignOut = () => useMutation(SIGN_OUT)
export const useLazyGetUser = () => useLazyQuery(GET_USER)
export const useGetUser = () => useQuery(GET_USER)


// Auth actions end -----------------------
// Auth Admin actions start -----------------------

export const useSignInAdmin = () => useMutation(SIGN_IN_ADMIN, {
  update(cache, { data: { signInAdmin: signedInAdmin }}) {
    cache.writeQuery({
      query: GET_USER,
      data: { admin: signedInAdmin }
    })
  }
})

export const useGetAdminUsers = () => useQuery(GET_ADMIN_USER)
export const useGetMerchantUsers = () => useQuery(GET_MERCHANT_USER)

// Auth Admin actions end -----------------------

