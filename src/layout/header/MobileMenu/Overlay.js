import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  background: ${props => props.theme.colors.mobileMenuOverlay};
  top: 0;
  left: 0;
  width: 100%;
  height: 0%;
  opacity: 0;
  visibility: hidden;
  transition: opacity .35s, visibility .35s, height .35s;
  overflow: hidden;
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0 auto;
    display: inline-block;
    position: relative;
    height: 100%;
  }

  ${props => (props.isMenuOpen ? `
  opacity: .95;
  visibility: visible;
  height: 100%;` : '')
}
  


    
`;

export default Overlay;
