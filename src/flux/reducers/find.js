import cloneObject from '../../utils/cloneObject';
import {
  FIND_SET_MOVIES,
  FIND_SET_PAGINATION,
  FIND_SET_SEARCH_TEXT,
} from '../actionTypes/find';

export const initialState = {
  movies: null,
  searchText: '',
  pagination: {
    current: 1,
    total: 0,
  },
};

const findReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_SET_SEARCH_TEXT: {
      const { searchText } = action;
      const newState = cloneObject(state);
      newState.searchText = searchText;
      return newState;
    }
    case FIND_SET_PAGINATION: {
      const { pagination } = action;
      const newState = cloneObject(state);
      newState.pagination = { ...newState.pagination, ...pagination };
      return newState;
    }
    case FIND_SET_MOVIES: {
      const { movies } = action;
      const newState = cloneObject(state);
      newState.movies = movies;
      return newState;
    }
    default: return state;
  }
};

export default findReducer;
