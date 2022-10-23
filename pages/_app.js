import '../styles/globals.css'
import {AppWrapper} from "../context/states";

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  )
}

export default MyApp
export { reportWebVitals } from 'next-axiom';
