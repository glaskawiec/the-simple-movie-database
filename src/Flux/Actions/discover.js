import {
  DISCOVER_REQUEST_DATA_FAILURE,
  DISCOVER_REQUEST_DATA_IS_PENDING,
  DISCOVER_REQUEST_DATA_SUCCESS,
  DISCOVER_SET_OPTIONS,
  DISCOVER_SET_PAGINATION,
} from '../ActionTypes/discover';

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
