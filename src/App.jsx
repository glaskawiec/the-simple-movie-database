import React, { Suspense } from 'react';
import { Provider, useHoux } from 'houx';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import Layout from './Layout/Layout';
import GlobalStyle from './GlobalStyle';
import Discover from './Routes/Discover/Discover';
import Themes from './Themes';
import store from './Flux/store';

const Find = React.lazy(() => import('./Routes/Find/Find'));
const Movie = React.lazy(() => import('./Routes/Movie/Movie'));

// const [state] = useHoux();
// @TODO: Add loading screen to Suspense
const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={Themes.light}>
        <>
          <Reset />
          <GlobalStyle />
          <Layout>
            <Route path="/" exact component={Discover} />
            <Suspense fallback={<div>Loading...</div>}>
              <Route path="/find" exact component={Find} />
              <Route path="/movie/:id" exact component={Movie} />
            </Suspense>
          </Layout>
        </>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);
export default App;
