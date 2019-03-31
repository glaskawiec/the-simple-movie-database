import { FIND_SET_PAGINATION, FIND_SET_SEARCH_TEXT } from '../ActionTypes/find';

export const findSetSearchText = searchText => ({
  type: FIND_SET_SEARCH_TEXT,
  searchText,
});

export const findSetPagination = pagination => ({
  type: FIND_SET_PAGINATION,
  pagination,
});
