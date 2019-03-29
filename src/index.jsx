import React from 'react';

import ReactDOM from 'react-dom';
import { HouxProvider } from 'houx';
import App from './App';
import './resources/fonts/index.css';
import global from './Flux/Reducers/global';
import discover from './Flux/Reducers/discover';

const reducers = {
  global,
  discover,
};

ReactDOM.render(
  <HouxProvider reducers={reducers} logDispatchedActions>
    <App />
  </HouxProvider>, document.getElementById('root'),
);
