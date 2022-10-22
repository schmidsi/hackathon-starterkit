import type { AppProps } from 'next/app';
import { NextUIProvider, globalCss } from '@nextui-org/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
