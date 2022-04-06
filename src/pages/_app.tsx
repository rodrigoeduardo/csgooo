import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ContextProvider } from '../contexts/Context';

import { theme } from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>csgooo</title>
      </Head>
      <ContextProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </ContextProvider>
    </>
  );
}

export default MyApp;
