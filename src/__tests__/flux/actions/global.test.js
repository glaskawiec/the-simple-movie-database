import { GLOBAL_THEME_CHANGE } from '../../../flux/actionTypes/global';
import { globalThemeChange } from '../../../flux/actions/global';

describe('Global actions', () => {
  it('should create GLOBAL_THEME_CHANGE action properly', () => {
    const expectedAction = {
      type: GLOBAL_THEME_CHANGE,
      theme: 'dark',
    };
    expect(globalThemeChange('dark')).toEqual(expectedAction);
  });
});
