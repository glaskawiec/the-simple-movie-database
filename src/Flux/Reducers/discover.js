import {
  DISCOVER_REQUEST_DATA_FAILURE,
  DISCOVER_REQUEST_DATA_IS_PENDING,
  DISCOVER_REQUEST_DATA_SUCCESS,
  DISCOVER_SET_OPTIONS,
  DISCOVER_SET_PAGINATION,
} from '../ActionTypes/discover';
import cloneObject from '../../utils/cloneObject';

export const initialState = {
  pagination: {
    current: 1,
    total: 0,
  },
  options: {
    year: '',
    sort: 'popularity.desc',
    genres: '',
  },
  request: {
    isPending: false,
    hadError: false,
    responseData: [],
    error: {},
  },
};

const discoverReducer = (state = initialState, action) => {
  switch (action && action.type) {
    case DISCOVER_REQUEST_DATA_IS_PENDING:
      const newState1 = cloneObject(state);
      newState1.request.hadError = false;
      newState1.request.isPending = true;
      return newState1;
    case DISCOVER_REQUEST_DATA_SUCCESS:
      const newState2 = cloneObject(state);
      const { responseData } = action;
      newState2.request.responseData = responseData;
      newState2.request.isPending = false;
      return newState2;
    case DISCOVER_REQUEST_DATA_FAILURE:
      const newState3 = cloneObject(state);
      const { error } = action;
      newState3.request.error = error;
      return newState3;
    case DISCOVER_SET_OPTIONS:
      const { options } = action;
      const newState4 = cloneObject(state);
      newState4.options = { ...newState4.options, ...options };
      return newState4;
    case DISCOVER_SET_PAGINATION:
      const { pagination } = action;
      const newState = cloneObject(state);
      newState.pagination = { ...newState.pagination, ...pagination };
      return newState;
    default: return state;
  }
};

export default discoverReducer;
