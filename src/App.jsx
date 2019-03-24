import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import Layout from './Layout/Layout';
import GlobalStyle from './GlobalStyle';
import Discover from './Routes/Discover/Discover';
import Find from './Routes/Find/Find';

const mobileWidth = 576;
const initialIsMobile = window.innerWidth <= mobileWidth;

const theme = {
  primary: '#F2355B',
  secondary: '#161616',
};

const App = () => {
  const [isMobile, setIsMobile] = useState(initialIsMobile);
  useEffect(() => {
    window.addEventListener('resize', (event) => {
      const windowWidth = event.currentTarget.innerWidth;
      const isCurrentlyMobile = windowWidth <= mobileWidth;
      setIsMobile(isCurrentlyMobile);
    });
  });
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <isMobileContext.Provider value={isMobile}>
          <Reset />
          <GlobalStyle />
          <Layout>
            <Route path="/" exact component={Discover} />
            <Route path="/find" exact component={Find} />
          </Layout>
        </isMobileContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export const isMobileContext = React.createContext(initialIsMobile);
export default App;
