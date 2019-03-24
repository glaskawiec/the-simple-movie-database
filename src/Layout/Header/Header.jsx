import React, { useState, useContext } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import HeaderStyled from './HeaderStyled';
import Logo from './Logo/Logo';
import Item from './Menu/Item';
import HeaderWrapper from './HeaderWrapper';
import MobileMenu from './Menu/Mobile/Menu';
import Menu from './Menu/Menu';
import Hamburger from './Hambruger/Hamburger';
import OffsetLogo from './Menu/Mobile/OffsetLogo';
import { isMobileContext } from '../../App';


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
            <Menu>
              {[
                {
                  label: 'discover',
                  path: '/',
                },
                {
                  label: 'find',
                  path: '/find',
                },
              ].map(item => (
                <Item
                  onClick={() => { history.push({ pathname: item.path }); }}
                  key={item.label}
                >
                  {item.label}
                </Item>
              ))}
            </Menu>
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
