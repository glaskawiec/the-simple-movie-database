import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import LogoText from './LogoText';

const Logo = ({ history, isMenuOpen, isDarkTheme }) => (
  <LogoText
    isMenuOpen={isMenuOpen}
    isDarkTheme={isDarkTheme}
    onClick={() => { history.push({ pathname: '/' }); }}
  >
    {'tsmdb'}
  </LogoText>
);

Logo.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  isDarkTheme: PropTypes.bool.isRequired,
};

export default withRouter(Logo);
