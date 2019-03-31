import { FIND_SET_PAGINATION, FIND_SET_SEARCH_TEXT } from '../../../flux/actionTypes/find';
import { findSetPagination, findSetSearchText } from '../../../flux/actions/find';


describe('Discover actions', () => {
  it('should create FIND_SET_SEARCH_TEXT action properly', () => {
    const expectedAction = {
      type: FIND_SET_SEARCH_TEXT,
      searchText: 'newAction',
    };
    expect(findSetSearchText('newAction')).toEqual(expectedAction);
  });

  it('should create FIND_SET_PAGINATION action properly', () => {
    const expectedAction = {
      type: FIND_SET_PAGINATION,
      pagination: { current: 1 },
    };
    expect(findSetPagination({ current: 1 })).toEqual(expectedAction);
  });
});
