import '../styles/globals.css'
import {AppWrapper} from "../context/states";
import { Analytics } from '@vercel/analytics/react';
import TagManager from "react-gtm-module";
import {useEffect} from "react";

const tagManagerArgs = {
  gtmId: 'GTM-TL2GXV6'
}

function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    TagManager.initialize(tagManagerArgs);
  },[])
  return (
    <AppWrapper>
      <Component {...pageProps} />
      <Analytics />
    </AppWrapper>
  )
}

export default MyApp
