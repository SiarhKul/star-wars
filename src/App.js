import { hot } from "react-hot-loader/root";
import React from "react";

import "./index.scss";

import { Header } from "./components";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { Films, People, Planets, Starships, Vehicles } from "./Pages";
import { history } from "./redux/reducers";
import { ConnectedRouter } from "connected-react-router";
import { Species } from "./Pages/species/Species";
import { Popup } from "./components/popup/Popup";

const App = () => {
	const isVisiblePopup = useSelector(state => state.app.isVisiblePopup);
	return (
		<>
			<ConnectedRouter history={history}>
				<Header />
				<Switch>
					<Route path="/" component={People} exact />
					<Route path="/planets" component={Planets} exact />
					<Route path="/starships" component={Starships} exact />
					<Route path="/films" component={Films} exact />
					<Route path="/vehicles" component={Vehicles} exact />
					<Route path="/species" component={Species} exact />
				</Switch>
				{isVisiblePopup && <Popup />}
			</ConnectedRouter>
		</>
	);
};

export default hot(App);
