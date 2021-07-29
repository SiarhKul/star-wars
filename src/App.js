import { hot } from "react-hot-loader/root";
import React from "react";

import "./index.scss";

import { Header } from "./components";
import { Route, Switch } from "react-router-dom";
import { Films, People, Planets, Starships, Vehicles } from "./Pages";
import { history } from "./redux/reducers";
import { ConnectedRouter } from "connected-react-router";
import { Species } from "./Pages/species/Species";
import { Home } from "./Pages/home/Home";

const App = () => {
	return (
		<>
			<ConnectedRouter history={history}>
				<Header />
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path="/people" component={People} />
					<Route path="/planets" component={Planets} />
					<Route path="/starships" component={Starships} />
					<Route path="/films" component={Films} />
					<Route path="/vehicles" component={Vehicles} />
					<Route path="/species" component={Species} />
				</Switch>
			</ConnectedRouter>
		</>
	);
};

export default hot(App);
