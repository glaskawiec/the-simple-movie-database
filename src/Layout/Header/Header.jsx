import React from 'react';
import PropTypes from 'prop-types';
import HeaderStyled from './HeaderStyled';
import Logo from './Logo/Logo';
import Container from '../Container';
import Menu from './Menu/Menu';
import Item from './Menu/Item';

const Header = props => (

  <HeaderStyled>
    <Container>
      <Logo />
      <Menu>
        {['movies', 'tv shows', 'actors'].map(item => (<Item key={item}>{item}</Item>))}
      </Menu>
    </Container>
  </HeaderStyled>

);

Header.propTypes = {

};

export default Header;
