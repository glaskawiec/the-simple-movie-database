import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import HamburgerInner from './HamburgerInner';
import HamburgerBox from './HamburgerBox';
import HamburgerWrapper from './HamburgerWrapper';

const Hamburger = ({
  setIsMenuOpen,
  isMenuOpen,
  isDarkTheme,
  location,
  history,
}) => {
  const showArrow = location.pathname.includes('/movie/');

  const onClick = () => {
    if (showArrow) {
      history.goBack();
    } else {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  return (
    <HamburgerWrapper
      onClick={onClick}
      id="hamburger"
    >
      <HamburgerBox>
        <HamburgerInner
          isDarkTheme={isDarkTheme}
          showCross={isMenuOpen}
          showArrow={showArrow}
        />
      </HamburgerBox>
    </HamburgerWrapper>
  );
};

Hamburger.propTypes = {
  setIsMenuOpen: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  isDarkTheme: PropTypes.bool.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};

export { Hamburger as PureHamburger };
export default withRouter(Hamburger);
