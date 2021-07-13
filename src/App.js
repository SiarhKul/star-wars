import { hot } from 'react-hot-loader/root';
import React from 'react';

import './index.scss';

import { Header } from './components';

import { Route, Switch } from 'react-router-dom';
import { People, Planets, Starships } from './Pages';
import { history } from './redux/reducers';
import { ConnectedRouter } from 'connected-react-router';

const App = () => {
  return (
    <>
      <ConnectedRouter history={history}>
        <Header />
        <Switch>
          <Route path="/" component={People} exact />
          <Route path="/planets" component={Planets} />
          <Route path="/starships" component={Starships} />
        </Switch>
      </ConnectedRouter>
    </>
  );
};

export default hot(App);
