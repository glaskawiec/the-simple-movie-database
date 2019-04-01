import configureMockStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import { fetchMock } from 'fetch-mock';
import {
  REQUEST_CLEAR,
  REQUEST_ERROR,
  REQUEST_IS_PENDING,
  REQUEST_SUCCESS,
} from '../../../flux/actionTypes/requests';
import {
  requestApi,
  requestClear,
  requestError,
  requestIsPending,
  requestSuccess,
} from '../../../flux/actions/requests';

const middlewares = [reduxThunk];
const mockStore = configureMockStore(middlewares);

describe('Requests actions', () => {
  it('should create REQUEST_IS_PENDING action properly', () => {
    const expectedAction = {
      type: REQUEST_IS_PENDING,
      id: '0',
    };
    expect(requestIsPending('0')).toEqual(expectedAction);
  });

  it('should create REQUEST_SUCCESS action properly', () => {
    const expectedAction = {
      type: REQUEST_SUCCESS,
      id: '0',
      responseData: { a: 1 },
    };
    expect(requestSuccess('0', { a: 1 })).toEqual(expectedAction);
  });

  it('should create REQUEST_ERROR action properly', () => {
    const expectedAction = {
      type: REQUEST_ERROR,
      id: '0',
      error: 'error',
    };
    expect(requestError('0', 'error')).toEqual(expectedAction);
  });

  it('should create REQUEST_CLEAR action properly', () => {
    const expectedAction = {
      type: REQUEST_CLEAR,
      id: '0',
    };
    expect(requestClear('0')).toEqual(expectedAction);
  });
});


describe('Request async actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates REQUEST_SUCCESS when fetching has been done', () => {
    const store = mockStore({});
    const id = 'asyncActionUnitTest';

    const sampleResponse = { data: 'testData' };
    const expectedActions = [
      { type: REQUEST_IS_PENDING, id },
      { type: REQUEST_SUCCESS, id, responseData: sampleResponse },
    ];

    const request = {
      endpoint: '/asyncActionUnitTest',
    };

    fetchMock.get('*', sampleResponse);

    return store.dispatch(requestApi(id, request))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });

  it('creates REQUEST_ERROR when fetching has been failed', () => {
    const store = mockStore({});
    const id = 'asyncActionUnitTest';
    const expectedActions = [
      { type: REQUEST_IS_PENDING, id },
      { type: REQUEST_ERROR, id, error: undefined },
    ];

    const request = {
      endpoint: '/asyncActionUnitTest',
    };

    fetchMock.get('*', 500);

    return store.dispatch(requestApi(id, request))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
