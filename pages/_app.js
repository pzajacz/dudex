import '../styles/globals.css'
import {AppWrapper} from "../context/states";
import { Analytics } from '@vercel/analytics/react';
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: 'GTM-TL2GXV6'
}

TagManager.initialize(tagManagerArgs);

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
      <Analytics />
    </AppWrapper>
  )
}

export default MyApp
