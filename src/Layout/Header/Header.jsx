import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import HeaderStyled from './HeaderStyled';
import Logo from './Logo/Logo';
import Container from '../Container';
import Menu from './Menu/Menu';
import Item from './Menu/Item';


const Header = ({ history }) => (
  <HeaderStyled>
    <Container>
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
    </Container>
  </HeaderStyled>
);

Header.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default withRouter(Header);
