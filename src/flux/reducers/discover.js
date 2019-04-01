import {
  DISCOVER_SET_MOVIES,
  DISCOVER_SET_OPTIONS,
  DISCOVER_SET_PAGINATION,
} from '../actionTypes/discover';
import cloneObject from '../../utils/cloneObject';

export const initialState = {
  movies: null,
  pagination: {
    current: 1,
    total: 0,
  },
  options: {
    year: '',
    sort: 'popularity.desc',
    genres: '',
  },
};

const discoverReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISCOVER_SET_OPTIONS: {
      const { options } = action;
      const newState = cloneObject(state);
      newState.options = { ...newState.options, ...options };
      return newState;
    }
    case DISCOVER_SET_PAGINATION: {
      const { pagination } = action;
      const newState = cloneObject(state);
      newState.pagination = { ...newState.pagination, ...pagination };
      return newState;
    }
    case DISCOVER_SET_MOVIES: {
      const { movies } = action;
      const newState = cloneObject(state);
      newState.movies = movies;
      return newState;
    }
    default: return state;
  }
};

export default discoverReducer;
