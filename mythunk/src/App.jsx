import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from './redux/CallbackActions';

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log('App', state);

  const handleClick = () => {
    dispatch(getData());
  };

  useEffect(() => {
    handleClick();
  }, []);
  return (
    <div style={{ margin: 'auto', textAlign: 'center' }}>
      <div>
        {state.map((ele, index) => {
          return (
            <div style={{ textAlign: 'center' }}>
              <div>{ele.name}</div>
              <div>{ele.email}</div>

              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
