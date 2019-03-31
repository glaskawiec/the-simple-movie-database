import globalReducer, { initialState } from '../../../flux/reducers/global';
import { GLOBAL_THEME_CHANGE } from '../../../flux/actionTypes/global';

describe('Global reducer', () => {
  it('should return the initial state', () => {
    expect(globalReducer(undefined, {}))
      .toEqual(initialState);
  });

  it('should handle GLOBAL_THEME_CHANGE properly', () => {
    const actionToHandle = {
      type: GLOBAL_THEME_CHANGE,
      theme: 'dark',
    };

    const expectedState = {
      ...initialState,
      theme: 'dark',
    };

    expect(globalReducer(initialState, actionToHandle))
      .toEqual(expectedState);
  });
});
