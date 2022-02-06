import '../styles/globals.css'
import type { AppProps } from 'next/app'

function ZeniApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default ZeniApp
