import { hot } from 'react-hot-loader/root';
import React from 'react';
import './styles.scss';
import { Test } from './Test';

const App = () => {
  return (
    <>
      <h1>I Hello 13</h1>
      <p className="colorful">test</p>
      <Test />
    </>
  );
};

export default hot(App);
