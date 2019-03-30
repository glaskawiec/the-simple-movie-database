import React, { Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import { useHoux } from 'houx';
import Layout from './Layout/Layout';
import GlobalStyle from './GlobalStyle';
import Discover from './Routes/Discover/Discover';
import Themes from './Themes';

const Find = React.lazy(() => import('./Routes/Find/Find'));
const Movie = React.lazy(() => import('./Routes/Movie/Movie'));

// @TODO: Add loading screen to Suspense
const App = () => {
  const { state } = useHoux();
  return (
    <BrowserRouter>
      <ThemeProvider theme={Themes[state.global.theme]}>
        <>
          <Reset />
          <GlobalStyle />
          <Layout>
            <Route path="/" exact component={Discover} />
            <Suspense fallback={<div>Loading...</div>}>
              <Route path="/find" exact component={Find} />
              <Route path="/movie/:title" exact component={Movie} />
            </Suspense>
          </Layout>
        </>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
