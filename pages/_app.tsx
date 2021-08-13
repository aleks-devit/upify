import '../styles/style.css'
import '../styles/layout.css'
import '../styles/checkbox.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
