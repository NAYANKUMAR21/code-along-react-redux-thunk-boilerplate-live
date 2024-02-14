export const getData = () => async (dispatch, state) => {
  try {
    const getDATA = await fetch('https://jsonplaceholder.typicode.com/users');

    const actualData = await getDATA.json(); //[]

    console.log('1', actualData);
    dispatch({ type: 'FetchData', payload: actualData });
  } catch (er) {
    console.log('error');
  }
};

//dispatch(getData())
//store/thunk
//getdata()
//dispatch({ type: 'FetchData', payload: actualData });
//reducerFn
//change state
//selector read the data
