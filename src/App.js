import { hot } from 'react-hot-loader/root';
import React from 'react';

import './scss/index.scss';

import { Header } from './components/Header';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { People } from './Pages/People';
import { Planets } from './Pages/Planets';
import { Starships } from './Pages/Starships';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={People} exact />
          <Route path="/planets" component={Planets} />
          <Route path="/starships" component={Starships} />
        </Switch>
      </Router>
    </>
  );
};

export default hot(App);
