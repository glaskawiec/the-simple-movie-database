import {
  DISCOVER_REQUEST_DATA_FAILURE,
  DISCOVER_REQUEST_DATA_IS_PENDING,
  DISCOVER_REQUEST_DATA_SUCCESS,
  DISCOVER_SET_OPTIONS,
  DISCOVER_SET_PAGINATION,
} from '../ActionTypes/discover';
import requestTheMovieDbApi from '../../utils/requestTheMovieDbApi';

export const discoverSetPagination = pagination => ({
  type: DISCOVER_SET_PAGINATION,
  pagination,
});
export const discoverSetOptions = options => ({
  type: DISCOVER_SET_OPTIONS,
  options,
});
export const discoverRequestDataIsPending = () => ({
  type: DISCOVER_REQUEST_DATA_IS_PENDING,
});
export const discoverRequestDataSuccess = responseData => ({
  type: DISCOVER_REQUEST_DATA_SUCCESS,
  responseData,
});
export const discoverRequestDataFailure = error => ({
  type: DISCOVER_REQUEST_DATA_FAILURE,
  error,
});

export const discoverRequestData = request => async (dispatch) => {
  try {
    dispatch(discoverRequestDataIsPending());
    const response = await requestTheMovieDbApi(request);
    const parsedResponse = await response.json();
    if (!parsedResponse.results) {
      dispatch(discoverRequestDataFailure({}));
    }
    dispatch(discoverRequestDataSuccess(parsedResponse.results));
    dispatch(discoverSetPagination({
      total: parsedResponse.total_pages,
    }));
  } catch (error) {
    dispatch(discoverRequestDataFailure(error));
  }
};
