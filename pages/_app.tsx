import '../styles/style.css'
import '../styles/layout.css'
import '../styles/checkbox.css'
import '../styles/globals.css'
import type {AppProps} from 'next/app'
import AuthProvider from "../src/Auth&Register/AuthProvider/AuthProvider";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}
export default MyApp
