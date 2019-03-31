import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
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
  const [showCross, setShowCross] = useState(false);
  const showArrow = location.pathname.includes('/movie/');

  useEffect(() => {
    setShowCross(isMenuOpen);
  }, [isMenuOpen]);

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
          showCross={showCross}
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

export default Hamburger;
