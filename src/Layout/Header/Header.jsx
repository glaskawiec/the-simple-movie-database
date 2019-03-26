import React, { useState, useContext } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import HeaderStyled from './HeaderStyled';
import Logo from './Logo/Logo';
import HeaderWrapper from './HeaderWrapper';
import Hamburger from './Hambruger/Hamburger';
import OffsetLogo from './MobileMenu/OffsetLogo';
import { isMobileContext } from '../../App';
import MobileMenu from './MobileMenu/MobileMenu';
import Menu from './Menu/Menu';
import ThemeToggle from '../../Common/ThemeToggle/ThemeToggle';

const Header = ({ history }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useContext(isMobileContext);
  return (
    <HeaderStyled>
      <HeaderWrapper>
        {isMobile ? (
          <>
            <MobileMenu
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              history={history}
            />
            <Hamburger
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              history={history}
            />
            <Logo />
            <OffsetLogo />
          </>
        ) : (
          <>
            <Logo />
            <Menu />
            <ThemeToggle />
          </>
        )}
      </HeaderWrapper>
    </HeaderStyled>
  );
};

Header.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default withRouter(Header);
