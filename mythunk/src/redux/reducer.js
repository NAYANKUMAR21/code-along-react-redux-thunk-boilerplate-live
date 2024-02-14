const initValue = [];
function reducerFn(state = initValue, action) {
  const { type, payload } = action;

  if (type == 'FetchData') {
    state = payload;
    return state;
  } else {
    return state;
  }
}

export default reducerFn;
