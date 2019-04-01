import findReducer, { initialState } from '../../../flux/reducers/find';
import {
  FIND_SET_MOVIES,
  FIND_SET_PAGINATION,
  FIND_SET_SEARCH_TEXT,
} from '../../../flux/actionTypes/find';

describe('Find reducer', () => {
  it('should return the initial state', () => {
    expect(findReducer(undefined, {}))
      .toEqual(initialState);
  });

  it('should handle FIND_SET_SEARCH_TEXT properly', () => {
    const actionToHandle = {
      type: FIND_SET_SEARCH_TEXT,
      searchText: 'searchText',
    };

    const expectedState = {
      ...initialState,
      searchText: 'searchText',
    };

    expect(findReducer(initialState, actionToHandle))
      .toEqual(expectedState);
  });

  it('should handle FIND_SET_PAGINATION properly', () => {
    const actionToHandle = {
      type: FIND_SET_PAGINATION,
      pagination: {
        current: 7,
      },
    };

    const expectedState = {
      ...initialState,
      pagination: {
        ...initialState.pagination,
        current: 7,
      },
    };

    expect(findReducer(initialState, actionToHandle))
      .toEqual(expectedState);
  });

  it('should handle FIND_SET_MOVIES properly', () => {
    const actionToHandle = {
      type: FIND_SET_MOVIES,
      movies: [
        {
          title: 'test',
        },
      ],
    };

    const expectedState = {
      ...initialState,
      movies: [
        {
          title: 'test',
        },
      ],
    };

    expect(findReducer(initialState, actionToHandle))
      .toEqual(expectedState);
  });
});
