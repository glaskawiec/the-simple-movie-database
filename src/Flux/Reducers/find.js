import cloneObject from '../../utils/cloneObject';
import { FIND_SET_SEARCH_TEXT } from '../ActionTypes/find';

export const initialState = {
  searchText: '',
};

const findReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_SET_SEARCH_TEXT: {
      const { searchText } = action;
      const newState = cloneObject(state);
      newState.searchText = searchText;
      return newState;
    }
    default: return state;
  }
};

export default findReducer;
