import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Reset } from 'styled-reset';
import Layout from './Layout/Layout';
import GlobalStyle from './GlobalStyle';
import Movies from './Routes/Movies/Movies';

const App = () => (
  <BrowserRouter>
    <Reset />
    <GlobalStyle />
    <Layout>
      <Route path="/" exact component={Movies} />
    </Layout>
  </BrowserRouter>
);

export default App;
