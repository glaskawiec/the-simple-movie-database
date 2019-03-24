import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Reset } from 'styled-reset';
import Layout from './Layout/Layout';
import GlobalStyle from './GlobalStyle';
import Discover from './Routes/Discover/Discover';
import Find from './Routes/Find/Find';

const mobileWidth = 576;

const initialIsMobile = window.innerWidth <= mobileWidth;
export const isMobileContext = React.createContext(initialIsMobile);

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
      <isMobileContext.Provider value={isMobile}>
        <Reset />
        <GlobalStyle />
        <Layout>
          <Route path="/" exact component={Discover} />
          <Route path="/find" exact component={Find} />
        </Layout>
      </isMobileContext.Provider>
    </BrowserRouter>
  );
};

export default App;
