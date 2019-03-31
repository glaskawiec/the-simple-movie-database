import './resources/fonts/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { HouxProvider } from 'houx';
import App from './App';
import global from './Flux/Reducers/global';
import discover from './Flux/Reducers/discover';
import requests from './Flux/Reducers/requests';

const reducers = {
  global,
  discover,
  requests,
};

ReactDOM.render(
  <HouxProvider
    reducers={reducers}
    logDispatchedActions
  >
    <App />
  </HouxProvider>, document.getElementById('root'),
);
