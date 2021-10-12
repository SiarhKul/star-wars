import { hot } from 'react-hot-loader/root';
import React from 'react';

import './index.scss';

import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Header } from './components';
import { history } from './redux/reducers';

import { routes } from './routes';

const App = () => (
	<>
		<ConnectedRouter history={history}>
			<Header />
			<Switch>
				{routes.map(
					({
						path,
						exact,
						component: RouteComponent,
						componentFragment: FragmentPopup,
					}) => (
						<Route
							key={path}
							path={path}
							exact={exact}
							component={() => <RouteComponent FragmentPopup={FragmentPopup} />}
						/>
					),
				)}
			</Switch>
		</ConnectedRouter>
	</>
);

export default hot(App);
