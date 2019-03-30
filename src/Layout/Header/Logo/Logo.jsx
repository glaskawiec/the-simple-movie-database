import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import LogoText from './LogoText';

const Logo = ({ history }) => (
  <LogoText onClick={() => { history.push({ pathname: '/' }); }}>tsmdb</LogoText>
);

Logo.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

export default withRouter(Logo);
