import { hot } from 'react-hot-loader/root';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './scss/index.scss';

import { Test } from './components/Test';

const App = () => {
  const store = useSelector(store => store);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'LOAD_DATA' });
  }, []);

  console.log(store);
  return (
    <>
      <h1>I Hello 13</h1>
      <p className="colorful">test</p>
      <Test />
    </>
  );
};

export default hot(App);
