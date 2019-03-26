import styled from 'styled-components';

const LogoText = styled.div`
   font-family: 'Bebas Neue',serif;
    font-style: normal;
    font-weight: 500;
    color: #FFFFFF;
    font-size: 3em;
    border: solid .1em ${props => props.theme.colors.primary};
    border-bottom: 0;
    padding: .15em;
    display: inline-block;
    text-transform: uppercase;
    
       @media (max-width: 576px) {
       font-size: 2em;
      }
`;

export default LogoText;
