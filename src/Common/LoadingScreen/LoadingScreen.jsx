import React from 'react';
import LoadingBars from '../LoadingBars/LoadingBars';
import LoadingScreenStyled from './LoadingScreenStyled';

const LoadingScreen = () => (
  <LoadingScreenStyled>
    <LoadingBars />
  </LoadingScreenStyled>
);

export default LoadingScreen;
