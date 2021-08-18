import '../styles/style.css'
import '../styles/layout.css'
import '../styles/checkbox.css'
import '../styles/globals.css'
import '../styles/plugins.css'
import type {AppProps} from 'next/app'
import { useEffect } from 'react'
import {ApolloProvider} from "@apollo/client";
import { useApollo } from "apollo-client";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    typeof document !== undefined ? require('bootstrap') : null
  }, [])
// Передаем в функцию инициализации аполо, его начальное состояние
  const client = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
export default MyApp
