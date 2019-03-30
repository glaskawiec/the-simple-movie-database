import styled from 'styled-components';

const LogoText = styled.div`
  font-family: 'Bebas Neue',serif;
  font-style: normal;
  font-weight: 500;
  color: ${props => (props.isDarkTheme && props.isMenuOpen ? '#000000' : '#FFFFFF')};
  font-size: 3em;
  border: solid .1em ${props => props.theme.colors.primary};
  border-bottom: 0;
  padding: .15em;
  display: inline-block;
  text-transform: uppercase;
  cursor: pointer;
  z-index: 1;
   
  &:hover{
    color: ${props => props.theme.colors.primary};
  }
    
  @media (max-width: 576px) {
    font-size: 2em;
    position: absolute;
    left: calc(50% - 44.78px);
  }
`;

export default LogoText;
