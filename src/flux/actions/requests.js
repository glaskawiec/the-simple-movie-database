import {
  REQUEST_CLEAR,
  REQUEST_FAILURE,
  REQUEST_IS_PENDING,
  REQUEST_SUCCESS,
} from '../actionTypes/requests';
import requestTheMovieDbApi from '../../utils/requestTheMovieDbApi';

export const requestIsPending = id => ({
  type: REQUEST_IS_PENDING,
  id,
});

export const requestSuccess = (id, responseData) => ({
  type: REQUEST_SUCCESS,
  id,
  responseData,
});

export const requestError = (id, error) => ({
  type: REQUEST_FAILURE,
  id,
  error,
});

export const requestClear = id => ({
  type: REQUEST_CLEAR,
  id,
});

export const requestApi = (id, request, afterSuccess = () => ({})) => async (dispatch) => {
  try {
    dispatch(requestIsPending(id));
    const response = await requestTheMovieDbApi(request);
    if (!response.ok) {
      return dispatch(requestError(id, response.json().error));
    }
    const parsedResponse = await response.json();
    dispatch(requestSuccess(id, parsedResponse));
    afterSuccess(parsedResponse);
  } catch (error) {
    dispatch(requestError(id, error));
  }
};
