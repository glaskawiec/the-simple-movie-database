import { GLOBAL_THEME_CHANGE, GLOBAL_TOGGLE_IS_MOBILE } from '../ActionTypes/global';

export const initialState = {
  theme: 'light',
  isMobile: false,
};

const globalReducer = (state = initialState, action) => {
  switch (action && action.type) {
    case GLOBAL_THEME_CHANGE:
      const { theme } = action;
      return { ...state, theme };
    default: return state;
  }
};

export default globalReducer;
