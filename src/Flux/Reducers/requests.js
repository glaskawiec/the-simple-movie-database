import cloneObject from '../../utils/cloneObject';
import {
  REQUEST_CLEAR,
  REQUEST_FAILURE,
  REQUEST_IS_PENDING,
  REQUEST_SUCCESS,
} from '../ActionTypes/requests';
import createRequestsInitialState from '../../utils/createRequestsInitialState';

export const requestsIds = {
  details: 'details',
  credits: 'credits',
  discover: 'discover',
  search: 'search',
};

export const initialState = createRequestsInitialState(requestsIds);

const requestsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_IS_PENDING:
    {
      const { id } = action;
      const newState = cloneObject(state);
      newState[id].hadError = false;
      newState[id].isPending = true;
      newState[id].responseData = {};
      return newState;
    }
    case REQUEST_SUCCESS:
    {
      const newState = cloneObject(state);
      const { id, responseData } = action;
      newState[id].responseData = responseData;
      newState[id].isPending = false;
      return newState;
    }
    case REQUEST_FAILURE:
    {
      const newState = cloneObject(state);
      const { id, error } = action;
      newState[id].hadError = true;
      newState[id].error = error;
      return newState;
    }
    case REQUEST_CLEAR:
    {
      const newState = cloneObject(state);
      const { id } = action;
      newState[id] = {
        isPending: false,
        hadError: false,
        responseData: [],
        error: {},
      };
      return newState;
    }
    default: return state;
  }
};

export default requestsReducer;
