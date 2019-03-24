import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import Overlay from './Overlay';
import Navigation from './Navigation';
import MenuStyled from './MenuStyled';
import Item from './Item';

const MobileMenu = ({ isMenuOpen, setIsMenuOpen, history }) => {
  const changeRoute = (url) => {
    history.push(url);
    setIsMenuOpen(false);
  };

  return (
    <Overlay
      isMenuOpen={isMenuOpen}
      id="overlay"
    >
      <Navigation>
        <MenuStyled>
          {[
            {
              label: 'discover',
              path: '/',
            },
            {
              label: 'find',
              path: '/find',
            },
          ].map(menuOption => (
            <Item
              key={menuOption.label}
              aria-hidden
              onClick={() => changeRoute(menuOption.path)}
            >
              {menuOption.label}
            </Item>
          ))}
        </MenuStyled>
      </Navigation>
    </Overlay>
  );
};

MobileMenu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};

export default withRouter(MobileMenu);
