import React, { useState } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import { useHoux } from 'houx';
import HeaderStyled from './HeaderStyled';
import Logo from './Logo/Logo';
import HeaderWrapper from './HeaderWrapper';
import Hamburger from './Hambruger/Hamburger';
import MobileMenu from './MobileMenu/MobileMenu';
import Menu from './Menu/Menu';
import ThemeToggle from '../../common/themeToggle/ThemeToggle';

const Header = ({ history }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = window.innerWidth <= 576;
  const { state } = useHoux();
  const { theme } = state.global;
  const isDarkTheme = theme === 'dark';

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
              isDarkTheme={isDarkTheme}
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              history={history}
            />
            <Logo
              isDarkTheme={isDarkTheme}
              isMenuOpen={isMenuOpen}
            />
            <ThemeToggle isMobile />
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
