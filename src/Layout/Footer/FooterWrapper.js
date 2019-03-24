import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.secondary};
  width: 100%;
  height: 4em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default FooterWrapper;
