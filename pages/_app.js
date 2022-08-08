import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { StoreProvider } from '../context/StoreContext'


function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVER}
      appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID}
    >
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </MoralisProvider>
  )
}

export default MyApp
