import React from 'react';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Portfolio from './containers/Portfolio/Portfolio';

export default function Index(): React.ReactElement {
  return (
    <>
      <NavBar /> <Portfolio /> <Footer />
    </>
  );
}
