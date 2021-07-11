import { hot } from 'react-hot-loader/root';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './scss/index.scss';

import { Header } from './components/Header';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { People } from './Pages/People';
import { Planets } from './Pages/Planets';
import { Starships } from './Pages/Starships';

const App = () => {
  const store = useSelector(store => store);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'LOAD_DATA' });
  }, []);

  console.log(store);
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
