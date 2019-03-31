import cloneObject from '../../utils/cloneObject';
import {
  REQUEST_FAILURE,
  REQUEST_IS_PENDING,
  REQUEST_SUCCESS,
} from '../ActionTypes/requests';

export const initialState = {
  details: {
    isPending: false,
    hadError: false,
    responseData: [],
    error: {},
  },
  credits: {
    isPending: false,
    hadError: false,
    responseData: [],
    error: {},
  },
  discover: {
    isPending: false,
    hadError: false,
    responseData: [],
    error: {},
  },
};

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
    default: return state;
  }
};

export default requestsReducer;
