import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Container from '../Common/Container';

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
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Layout;
