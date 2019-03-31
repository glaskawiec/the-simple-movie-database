function createRequestsInitialState(requestsIds = {}) {
  const initialState = {};
  Object.values(requestsIds).forEach(((requestId) => {
    initialState[requestId] = {
      isPending: false,
      hadError: false,
      responseData: [],
      error: {},
    };
  }));
  return initialState;
}

export default createRequestsInitialState;
