import { expect } from 'chai';
import createRequestsInitialState from '../../utils/createRequestsInitialState';

describe('createRequestsInitialState func tests', () => {
  test('should create InitialState properly', () => {
    // given
    const requestIds = {
      requestOne: 'requestOne',
      requestTwo: 'requestTwo',
    };
    const expectedInitialState = {
      requestOne: {
        isPending: false,
        hadError: false,
        responseData: {},
        error: {},
      },
      requestTwo: {
        isPending: false,
        hadError: false,
        responseData: {},
        error: {},
      },
    };

    // when
    const createdState = createRequestsInitialState(requestIds);

    // then
    expect(createdState).to.equal(expectedInitialState);
  });
});
