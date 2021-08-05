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
import { Popup } from "./components/popup/Popup";
import { PeopleFragmenPopup } from "./Pages/people/PeopleFragmenPopup";
import { PlanetsFragmentPopup } from "./Pages/planets/PlanetsFragmentPopup";
import { StarshipsFragmentPopup } from "./Pages/starships/StarshipsFragmentPopup";
import { FilmsFragmentPopup } from "./Pages/film/FilmsFragmentPopup";
import { VehiclesFragmentPopup } from "./Pages/vehicles/VehiclesFragmentPopup";
import { SpeciesFragmentPopup } from "./Pages/species/SpeciesFragmentPopup";

const App = () => {
	return (
		<>
			<ConnectedRouter history={history}>
				<Header />
				<Switch>
					<Route path="/" component={Home} exact />
					<Route
						path="/people/:id"
						component={() => <Popup FragmentPopup={PeopleFragmenPopup} />}
					/>
					<Route path="/people" component={People} />

					<Route
						path="/planets/:id"
						component={() => <Popup FragmentPopup={PlanetsFragmentPopup} />}
					/>
					<Route path="/planets" component={Planets} />

					<Route
						path="/starships/:id"
						component={() => <Popup FragmentPopup={StarshipsFragmentPopup} />}
					/>
					<Route path="/starships" component={Starships} />

					<Route
						path="/films/:id"
						component={() => <Popup FragmentPopup={FilmsFragmentPopup} />}
					/>
					<Route path="/films" component={Films} />

					<Route
						path="/vehicles/:id"
						component={() => <Popup FragmentPopup={VehiclesFragmentPopup} />}
					/>
					<Route path="/vehicles" component={Vehicles} />

					<Route
						path="/species/:id"
						component={() => <Popup FragmentPopup={SpeciesFragmentPopup} />}
					/>
					<Route path="/species" component={Species} />
				</Switch>
			</ConnectedRouter>
		</>
	);
};

export default hot(App);
