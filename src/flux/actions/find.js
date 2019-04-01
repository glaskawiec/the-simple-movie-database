import { FIND_SET_MOVIES, FIND_SET_PAGINATION, FIND_SET_SEARCH_TEXT } from '../actionTypes/find';

export const findSetSearchText = searchText => ({
  type: FIND_SET_SEARCH_TEXT,
  searchText,
});

export const findSetPagination = pagination => ({
  type: FIND_SET_PAGINATION,
  pagination,
});

export const findSetMovies = movies => ({
  type: FIND_SET_MOVIES,
  movies,
});
