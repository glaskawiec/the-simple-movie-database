import React from 'react';
import { Reset } from 'styled-reset';
import Layout from './Layout/Layout';
import GlobalStyle from './GlobalStyle';

const App = () => (
  <>
    <Reset />
    <GlobalStyle />
    <Layout />
  </>
);

export default App;
