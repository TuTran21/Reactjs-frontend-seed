import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';

const MainLayout = Component => props => (
  <>
    <Header />
    <Component {...props} />
    <Footer />
  </>
);

export default MainLayout;
