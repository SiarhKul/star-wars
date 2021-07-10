import { hot } from 'react-hot-loader/root';
import React from 'react';
import './styles.scss';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>I Hello 13</h1>
        <p className="colorful">test</p>
      </>
    );
  }
}

export default hot(App);
