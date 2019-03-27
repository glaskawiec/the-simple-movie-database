import { createStoreWithReducers } from 'houx';
import discover from './Reducers/discover';
import global from './Reducers/global';

const reducers = {
  global,
  discover,
};

const store = createStoreWithReducers(reducers);

export default store;
