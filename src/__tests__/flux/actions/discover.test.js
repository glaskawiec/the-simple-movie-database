import { DISCOVER_SET_OPTIONS, DISCOVER_SET_PAGINATION } from '../../../flux/actionTypes/discover';
import { discoverSetOptions, discoverSetPagination } from '../../../flux/actions/discover';

describe('Discover actions', () => {
  it('should create DISCOVER_SET_PAGINATION action properly', () => {
    const expectedAction = {
      type: DISCOVER_SET_PAGINATION,
      pagination: { current: 1 },
    };
    expect(discoverSetPagination({ current: 1 })).toEqual(expectedAction);
  });

  it('should create DISCOVER_SET_OPTIONS action properly', () => {
    const expectedAction = {
      type: DISCOVER_SET_OPTIONS,
      options: { year: 2019 },
    };
    expect(discoverSetOptions({ year: 2019 })).toEqual(expectedAction);
  });
});
