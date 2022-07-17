import * as React from 'react';
import Footer from './components/Footer/Footer';
import Portfolio from './containers/Portfolio/Portfolio';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import '../styles/globals.scss';
import Head from 'next/head';
import theme from './theme';

function MyApp() {
  return (
    <ChakraProvider>
      <html lang={'en'}>
        <Head>
          <title>John Farrell</title>
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
