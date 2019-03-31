import {
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
