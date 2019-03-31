import React from 'react';
import LoadingBars from '../loadingBars/LoadingBars';
import LoadingScreenStyled from './LoadingScreenStyled';

const LoadingScreen = () => (
  <LoadingScreenStyled>
    <LoadingBars />
  </LoadingScreenStyled>
);

export default LoadingScreen;
