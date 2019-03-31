import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import Item from './Item';
import MenuWrapper from './MenuWrapper';

const Menu = ({ history }) => (
  <MenuWrapper>
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
  </MenuWrapper>
);

Menu.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default withRouter(Menu);
