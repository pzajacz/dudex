import '../styles/globals.css'
import {AppWrapper} from "../context/states";
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
      <Analytics />
    </AppWrapper>
  )
}

export default MyApp
