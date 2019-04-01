import React from 'react';
import PropTypes from 'prop-types';
import Header from './header/Header';
import Footer from './footer/Footer';
import Container from '../common/Container';

const Layout = ({ children }) => (
  <>
    <Header />
    <Container>
      {children}
    </Container>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
