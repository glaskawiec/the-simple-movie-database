import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header/Header';
import Container from './Container';
import Footer from './Footer/Footer';

const Layout = props => (
  <>
    <Header />
    <Container />
    <Footer />
  </>
);

Layout.propTypes = {

};

export default Layout;
