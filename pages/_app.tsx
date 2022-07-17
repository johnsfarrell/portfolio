import * as React from 'react';
import Footer from './components/Footer/Footer';
import Portfolio from './containers/Portfolio/Portfolio';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import '../styles/globals.scss';
import Head from 'next/head';

import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

function MyApp() {
  return (
    <ChakraProvider>
      <html lang={'en'}>
        <Head>
          <title>John Farrell</title>
          <link rel="shortcut icon" href="/images/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/favicon-16x16.png"
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Portfolio />
          <Footer />
        </body>
      </html>
    </ChakraProvider>
  );
}

export default MyApp;
