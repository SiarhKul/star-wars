import { hot } from 'react-hot-loader/root';
import React from 'react';

import './scss/index.scss';

import { Test } from './components/Test';

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
