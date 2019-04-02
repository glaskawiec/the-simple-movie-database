/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { PureHamburger } from '../../layout/header/hambruger/Hamburger';
import HamburgerInner from '../../layout/header/hambruger/HamburgerInner';

describe('Hamburger component tests', () => {
  it('should render return arrow when user is at movie route', () => {
    PureHamburger.propTypes.history = PropTypes.func.isRequired;
    PureHamburger.propTypes.location = PropTypes.object.isRequired;

    const props = {
      setIsMenuOpen: jest.fn(),
      isMenuOpen: false,
      isDarkTheme: false,
      location: { pathname: '/movie/' },
      history: jest.fn(),
    };

    const wrapper = shallow(<PureHamburger {...props} />);

    const hamburgerInnerProps = wrapper.find(HamburgerInner).props();

    expect(hamburgerInnerProps.showCross).to.equal(false);
    expect(hamburgerInnerProps.showArrow).to.equal(true);
  });

  it('should render exit cross when menu is open', () => {
    PureHamburger.propTypes.history = PropTypes.func.isRequired;
    PureHamburger.propTypes.location = PropTypes.object.isRequired;

    const props = {
      setIsMenuOpen: jest.fn(),
      isMenuOpen: true,
      isDarkTheme: false,
      location: { pathname: '/' },
      history: jest.fn(),
    };

    const wrapper = shallow(<PureHamburger {...props} />);

    const hamburgerInnerProps = wrapper.find(HamburgerInner).props();

    expect(hamburgerInnerProps.showCross).to.equal(true);
    expect(hamburgerInnerProps.showArrow).to.equal(false);
  });

  it('should render hamburger icon when menu is closed and path is not movie', () => {
    PureHamburger.propTypes.history = PropTypes.func.isRequired;
    PureHamburger.propTypes.location = PropTypes.object.isRequired;

    const props = {
      setIsMenuOpen: jest.fn(),
      isMenuOpen: false,
      isDarkTheme: false,
      location: { pathname: '/' },
      history: jest.fn(),
    };

    const wrapper = shallow(<PureHamburger {...props} />);

    const hamburgerInnerProps = wrapper.find(HamburgerInner).props();

    expect(hamburgerInnerProps.showCross).to.equal(false);
    expect(hamburgerInnerProps.showArrow).to.equal(false);
  });
});
