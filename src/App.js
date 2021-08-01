import { hot } from "react-hot-loader/root";
import React, { useEffect } from "react";

import "./index.scss";

import { Header } from "./components";
import { Route, Switch, useLocation } from "react-router-dom";
import { Films, People, Planets, Starships, Vehicles } from "./Pages";
import { history } from "./redux/reducers";
import { ConnectedRouter } from "connected-react-router";
import { Species } from "./Pages/species/Species";
import { Home } from "./Pages/home/Home";
import { useDispatch } from "react-redux";
import { isVisiblePopup } from "./redux/actionsCreators/actionsCrators";
import { useSelector } from "react-redux";

const App = () => {
	const dispatch = useDispatch();
	const isVisible = useSelector(state => state.loading.isVisiblePopup);

	useEffect(() => {
		history.listen(location => {
			console.log("app", location);
			if (/selected/i.test(location.search)) {
				dispatch(isVisiblePopup(true));
				console.log(" has query string");
			} else {
				// dispatch(isVisiblePopup(false));
				console.log("NO has query string");
			}
		});
	}, [history]);

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
