import * as React from 'react';
import Footer from './components/Footer/Footer';
import Portfolio from './containers/Portfolio/Portfolio';
import { background, ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import '../styles/globals.scss';
import Head from 'next/head';
import theme from '../public/theme';
import { Box, Stack, Spacer, HStack } from '@chakra-ui/react';
import NavBar from './components/NavBar/NavBar';

function MyApp() {
  return (
    <ChakraProvider theme={theme}>
      <html lang={'en'}>
        <Head>
          <title>John Farrell</title>
          <link rel="shortcut icon" href="/images/favicon.ico" />
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
        <body className="background">
          <ColorModeScript initialColorMode={theme.initialColorMode} />
          <NavBar />
          <Portfolio />
          <Footer />
        </body>
      </html>
    </ChakraProvider>
  );
}

export default MyApp;
