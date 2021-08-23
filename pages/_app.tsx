import '../styles/style.css'
import '../styles/layout.css'
import '../styles/checkbox.css'
import '../styles/globals.css'
import '../styles/plugins.css'
import type {AppProps} from 'next/app'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    typeof document !== undefined ? require('bootstrap') : null
  }, [])


  return (
      <Component {...pageProps} />

  )
}
export default MyApp
