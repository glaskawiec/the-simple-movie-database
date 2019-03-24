import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import HamburgerInner from './HamburgerInner';
import HamburgerBox from './HamburgerBox';
import HamburgerWrapper from './HamburgerWrapper';

const Hamburger = ({
  setIsMenuOpen, isMenuOpen,
}) => {
  const [showCross, setShowCross] = useState(false);

  useEffect(() => {
    setShowCross(isMenuOpen);
  }, [isMenuOpen]);

  const onClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HamburgerWrapper
      onClick={onClick}
      id="hamburger"
    >
      <HamburgerBox>
        <HamburgerInner
          showCross={showCross}
        />
      </HamburgerBox>
    </HamburgerWrapper>
  );
};

Hamburger.propTypes = {
  setIsMenuOpen: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};

export default withRouter(Hamburger);
