import * as React from 'react';
import Footer from './components/Footer/Footer';
import Portfolio from './containers/Portfolio/Portfolio';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '../styles/globals.scss';
import Head from 'next/head';

function MyApp() {
  return (
    <ChakraProvider>
      <html lang={'en'}>
        <Head>
          <title>John Farrell</title>
        </Head>
        <Portfolio />
        <Footer />
      </html>
    </ChakraProvider>
  );
}

export default MyApp;
