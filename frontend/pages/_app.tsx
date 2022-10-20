import type { AppProps } from 'next/app';
import { NextUIProvider, globalCss } from '@nextui-org/react';
import { ApolloProvider } from '@apollo/client';

import { useApollo } from '../lib/apolloClient';

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <NextUIProvider>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </NextUIProvider>
  );
}

export default MyApp;
