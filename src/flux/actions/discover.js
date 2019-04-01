import {
  DISCOVER_SET_MOVIES,
  DISCOVER_SET_OPTIONS,
  DISCOVER_SET_PAGINATION,
} from '../actionTypes/discover';

export const discoverSetPagination = pagination => ({
  type: DISCOVER_SET_PAGINATION,
  pagination,
});

export const discoverSetOptions = options => ({
  type: DISCOVER_SET_OPTIONS,
  options,
});

export const discoverSetMovies = movies => ({
  type: DISCOVER_SET_MOVIES,
  movies,
});
