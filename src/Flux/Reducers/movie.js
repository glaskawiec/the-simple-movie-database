import cloneObject from '../../utils/cloneObject';
import {
  MOVIE_REQUEST_CREDITS_FAILURE,
  MOVIE_REQUEST_CREDITS_IS_PENDING, MOVIE_REQUEST_CREDITS_SUCCESS,
  MOVIE_REQUEST_DETAILS_FAILURE,
  MOVIE_REQUEST_DETAILS_IS_PENDING,
  MOVIE_REQUEST_DETAILS_SUCCESS,
} from '../ActionTypes/movie';

export const initialState = {
  details: {
    request: {
      isPending: false,
      hadError: false,
      responseData: [],
      error: {},
    },
  },
  credits: {
    request: {
      isPending: false,
      hadError: false,
      responseData: [],
      error: {},
    },
  },
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_REQUEST_DETAILS_IS_PENDING:
      return (() => {
        const newState = cloneObject(state);
        newState.details.request.hadError = false;
        newState.details.request.isPending = true;
        return newState;
      })();
    case MOVIE_REQUEST_DETAILS_SUCCESS:
      return (() => {
        const newState = cloneObject(state);
        const { responseData } = action;
        newState.details.request.responseData = responseData;
        newState.details.request.isPending = false;
        return newState;
      })();
    case MOVIE_REQUEST_DETAILS_FAILURE:
      return (() => {
        const newState3 = cloneObject(state);
        const { error } = action;
        newState3.details.request.error = error;
        return newState3;
      });
    case MOVIE_REQUEST_CREDITS_IS_PENDING:
      return (() => {
        const newState = cloneObject(state);
        newState.credits.request.hadError = false;
        newState.credits.request.isPending = true;
        return newState;
      })();

    case MOVIE_REQUEST_CREDITS_SUCCESS:
      return (() => {
        const newState = cloneObject(state);
        const { responseData } = action;
        newState.credits.request.responseData = responseData;
        newState.credits.request.isPending = false;
        return newState;
      })();
    case MOVIE_REQUEST_CREDITS_FAILURE:
      return (() => {
        const newState = cloneObject(state);
        const { error } = action;
        newState.credits.request.error = error;
        return newState;
      })();
    default: return state;
  }
};

export default movieReducer;
