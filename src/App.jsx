import React, {
  Suspense, useEffect, useState, createContext,
} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import Layout from './Layout/Layout';
import GlobalStyle from './GlobalStyle';
import Discover from './Routes/Discover/Discover';
import Themes from './Themes';

const Find = React.lazy(() => import('./Routes/Find/Find'));

const mobileWidth = 576;
const initialIsMobile = window.innerWidth <= mobileWidth;


const App = () => {
  const [isMobile, setIsMobile] = useState(initialIsMobile);
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    window.addEventListener('resize', (event) => {
      const windowWidth = event.currentTarget.innerWidth;
      const isCurrentlyMobile = windowWidth <= mobileWidth;
      setIsMobile(isCurrentlyMobile);
    });
  });


  return (
    <BrowserRouter>
      <appContext.Provider value={{ isMobile: initialIsMobile, theme, setTheme }}>
        <isMobileContext.Provider value={isMobile}>
          <ThemeProvider theme={Themes[theme]}>
            <>
              <Reset />
              <GlobalStyle />
              <Layout>
                <Route path="/" exact component={Discover} />
                <Suspense fallback={<div>Loading...</div>}>
                  <Route path="/find" exact component={Find} />
                </Suspense>
              </Layout>
            </>
          </ThemeProvider>
        </isMobileContext.Provider>
      </appContext.Provider>
    </BrowserRouter>
  );
};

export const isMobileContext = React.createContext(initialIsMobile);
export const appContext = createContext(null);
export default App;
