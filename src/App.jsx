import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import { useHoux } from 'houx';
import Layout from './layout/Layout';
import GlobalStyle from './globalStyle';
import Discover from './routes/discover/Discover';
import Themes from './themes';
import LoadingScreen from './common/loadingScreen/LoadingScreen';
import NotFound from './common/notFound/NotFound';

const Find = React.lazy(() => import('./routes/find/Find'));
const Movie = React.lazy(() => import('./routes/movie/Movie'));

const App = () => {
  const { state } = useHoux();
  return (
    <BrowserRouter>
      <ThemeProvider theme={Themes[state.global.theme]}>
        <>
          <Reset />
          <GlobalStyle />
          <Layout>
            <Suspense fallback={<LoadingScreen />}>
              <Switch>
                <Route path="/" exact component={Discover} />
                <Route path="/find" component={Find} />
                <Route path="/movie/:id/:title" component={Movie} />
                <Route component={NotFound} />
              </Switch>
            </Suspense>
          </Layout>
        </>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
