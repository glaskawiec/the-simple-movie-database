import './resources/fonts/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { HouxProvider } from 'houx';
import App from './App';
import global from './flux/reducers/global';
import discover from './flux/reducers/discover';
import requests from './flux/reducers/requests';
import find from './flux/reducers/find';

const reducers = {
  global,
  discover,
  find,
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
