import discoverReducer, { initialState } from '../../../flux/reducers/discover';
import {
  DISCOVER_SET_MOVIES,
  DISCOVER_SET_OPTIONS,
  DISCOVER_SET_PAGINATION,
} from '../../../flux/actionTypes/discover';

describe('Discover reducer', () => {
  it('should return the initial state', () => {
    expect(discoverReducer(undefined, {}))
      .toEqual(initialState);
  });

  it('should handle DISCOVER_SET_OPTIONS properly', () => {
    const actionToHandle = {
      type: DISCOVER_SET_OPTIONS,
      options: {
        year: 2019,
      },
    };

    const expectedState = {
      ...initialState,
      options: {
        ...initialState.options,
        year: 2019,
      },
    };

    expect(discoverReducer(initialState, actionToHandle))
      .toEqual(expectedState);
  });

  it('should handle DISCOVER_SET_PAGINATION properly', () => {
    const actionToHandle = {
      type: DISCOVER_SET_PAGINATION,
      pagination: {
        current: 3,
      },
    };

    const expectedState = {
      ...initialState,
      pagination: {
        ...initialState.pagination,
        current: 3,
      },
    };

    expect(discoverReducer(initialState, actionToHandle))
      .toEqual(expectedState);
  });

  it('should handle DISCOVER_SET_MOVIES properly', () => {
    const actionToHandle = {
      type: DISCOVER_SET_MOVIES,
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

    expect(discoverReducer(initialState, actionToHandle))
      .toEqual(expectedState);
  });
});
