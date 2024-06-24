import { isIE, isSafari } from 'react-device-detect'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClientProvider } from 'react-query';
import { queryClient } from '../services/queryClient';

export default function App({ Component, pageProps }: AppProps) {
  // const showPage = !isSafari && !isIE;
  return (
    <>
      {/* {showPage ?
      
          <Component {...pageProps} />
        </QueryClientProvider> : 
        <div className="block">
          <h2>O Safari e o Internet Explorer não são compatíveis com essa página, favor utilizar o Chrome, Opera, Firefox ou Brave</h2>
        </div> */}

      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  )
}
