import React from 'react';
import Footer from './components/Footer/Footer';
import { background, ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import '../styles/globals.scss';
import Head from 'next/head';
import theme from '../public/theme';
import NavBar from './components/NavBar/NavBar';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps): JSX.Element {
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
          <Component {...pageProps} />
          <Footer />
        </body>
      </html>
    </ChakraProvider>
  );
}

export default App;
