import requestsReducer, { initialState, requestsIds } from '../../../flux/reducers/requests';
import createRequestsInitialState from '../../../utils/createRequestsInitialState';
import {
  REQUEST_CLEAR,
  REQUEST_ERROR,
  REQUEST_IS_PENDING,
  REQUEST_SUCCESS,
} from '../../../flux/actionTypes/requests';
import cloneObject from '../../../utils/cloneObject';

const id = 'test';
const preparedRequestIds = cloneObject(requestsIds);
preparedRequestIds[id] = id;
const preparedInitialState = createRequestsInitialState(preparedRequestIds);

describe('Requests reducer', () => {
  it('should return the initial state', () => {
    expect(requestsReducer(undefined, {}))
      .toEqual(initialState);
  });

  it('should handle REQUEST_IS_PENDING properly', () => {
    const actionToHandle = {
      type: REQUEST_IS_PENDING,
      id,
    };

    const expectedState = cloneObject(preparedInitialState);
    expectedState[id].hadError = false;
    expectedState[id].isPending = true;
    expectedState[id].responseData = {};

    expect(requestsReducer(preparedInitialState, actionToHandle))
      .toEqual(expectedState);
  });

  it('should handle REQUEST_SUCCESS properly', () => {
    const responseData = { a: 'test' };
    const actionToHandle = {
      type: REQUEST_SUCCESS,
      id,
      responseData,
    };

    const expectedState = cloneObject(preparedInitialState);
    expectedState[id].responseData = responseData;
    expectedState[id].isPending = false;

    expect(requestsReducer(preparedInitialState, actionToHandle))
      .toEqual(expectedState);
  });

  it('should handle REQUEST_ERROR properly', () => {
    const error = { a: 'test' };
    const actionToHandle = {
      type: REQUEST_ERROR,
      id,
      error,
    };

    const expectedState = cloneObject(preparedInitialState);
    expectedState[id].hadError = true;
    expectedState[id].error = error;

    expect(requestsReducer(preparedInitialState, actionToHandle))
      .toEqual(expectedState);
  });

  it('should handle REQUEST_CLEAR properly', () => {
    const actionToHandle = {
      type: REQUEST_CLEAR,
      id,
    };

    const expectedState = cloneObject(preparedInitialState);
    expectedState[id] = {
      isPending: false,
      hadError: false,
      responseData: [],
      error: {},
    };

    expect(requestsReducer(preparedInitialState, actionToHandle))
      .toEqual(expectedState);
  });
});
