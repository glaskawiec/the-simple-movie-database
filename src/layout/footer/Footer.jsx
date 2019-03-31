import React from 'react';
import FooterWrapper from './FooterWrapper';
import FooterText from './FooterText';
import FooterLogo from './FooterLogo';

const Footer = () => (
  <FooterWrapper>
    <FooterLogo>tsmdb</FooterLogo>
    <FooterText>
      {'© 2019 by Gilbert Łaskawiec.'}
    </FooterText>
  </FooterWrapper>
);

export default Footer;
