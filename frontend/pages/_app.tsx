import type { AppProps } from 'next/app';
import { NextUIProvider, globalCss } from '@nextui-org/react';
import { createClient, Provider } from 'urql';
import { graphExchange } from '@graphprotocol/client-urql';
import * as GraphClient from '../.graphclient';

const client = createClient({
  url: 'graphclient://dummy',
  exchanges: [graphExchange(GraphClient)],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Provider value={client}>
        <Component {...pageProps} />
      </Provider>
    </NextUIProvider>
  );
}

export default MyApp;
