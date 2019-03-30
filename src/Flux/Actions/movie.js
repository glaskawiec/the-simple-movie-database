import requestTheMovieDbApi from '../../utils/requestTheMovieDbApi';
import {
  MOVIE_REQUEST_CREDITS_FAILURE,
  MOVIE_REQUEST_CREDITS_IS_PENDING,
  MOVIE_REQUEST_CREDITS_SUCCESS,
  MOVIE_REQUEST_DETAILS_FAILURE,
  MOVIE_REQUEST_DETAILS_IS_PENDING,
  MOVIE_REQUEST_DETAILS_SUCCESS,
} from '../ActionTypes/movie';

const movieRequestDetailsIsPending = () => ({
  type: MOVIE_REQUEST_DETAILS_IS_PENDING,
});
const movieRequestDetailsSuccess = responseData => ({
  type: MOVIE_REQUEST_DETAILS_SUCCESS,
  responseData,
});
const movieRequestDetailsFailure = error => ({
  type: MOVIE_REQUEST_DETAILS_FAILURE,
  error,
});

export const movieRequestDetails = request => async (dispatch) => {
  try {
    dispatch(movieRequestDetailsIsPending());
    const response = await requestTheMovieDbApi(request);
    const parsedResponse = await response.json();
    dispatch(movieRequestDetailsSuccess(parsedResponse));
  } catch (error) {
    dispatch(movieRequestDetailsFailure(error));
  }
};

const movieRequestCreditsIsPending = () => ({
  type: MOVIE_REQUEST_CREDITS_IS_PENDING,
});
const movieRequestCreditsSuccess = responseData => ({
  type: MOVIE_REQUEST_CREDITS_SUCCESS,
  responseData,
});
const movieRequestCreditsFailure = error => ({
  type: MOVIE_REQUEST_CREDITS_FAILURE,
  error,
});

export const movieRequestCredits = request => async (dispatch) => {
  try {
    dispatch(movieRequestCreditsIsPending());
    const response = await requestTheMovieDbApi(request);
    const parsedResponse = await response.json();
    dispatch(movieRequestCreditsSuccess(parsedResponse));
  } catch (error) {
    dispatch(movieRequestCreditsFailure(error));
  }
};
