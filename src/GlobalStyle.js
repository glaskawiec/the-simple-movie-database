import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    font-family: Karla,serif;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
}
`;

export default GlobalStyle;
