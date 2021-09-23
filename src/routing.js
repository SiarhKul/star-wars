import { Popup } from "./components/popup/Popup";
import { Films, People, Planets, Starships, Vehicles } from "./Pages";
import { FilmsFragmentPopup } from "./Pages/film/FilmsFragmentPopup";
import { Home } from "./Pages/home/Home";
import { PeopleFragmenPopup } from "./Pages/people/PeopleFragmenPopup";
import { PlanetsFragmentPopup } from "./Pages/planets/PlanetsFragmentPopup";
import { Species } from "./Pages/species/Species";
import { SpeciesFragmentPopup } from "./Pages/species/SpeciesFragmentPopup";
import { StarshipsFragmentPopup } from "./Pages/starships/StarshipsFragmentPopup";
import { VehiclesFragmentPopup } from "./Pages/vehicles/VehiclesFragmentPopup";

export const routes = [
	{
		path: "/",
		exact: true,
		component: Home,
		componentFragment: null,
	},
	{
		path: "/people/:id",
		exact: false,
		component: Popup,
		componentFragment: PeopleFragmenPopup,
	},
	{
		path: "/people",
		exact: false,
		component: People,
		componentFragment: null,
	},
	{
		path: "/planets/:id",
		exact: false,
		component: Popup,
		componentFragment: PlanetsFragmentPopup,
	},
	{
		path: "/planets",
		exact: false,
		component: Planets,
		componentFragment: null,
	},
	{
		path: "/starships/:id",
		exact: false,
		component: Popup,
		componentFragment: StarshipsFragmentPopup,
	},
	{
		path: "/starships",
		exact: false,
		component: Starships,
		componentFragment: null,
	},
	{
		path: "/films/:id",
		exact: false,
		component: Popup,
		componentFragment: FilmsFragmentPopup,
	},
	{
		path: "/films",
		exact: false,
		component: Films,
		componentFragment: null,
	},
	{
		path: "/vehicles/:id",
		exact: false,
		component: Popup,
		componentFragment: VehiclesFragmentPopup,
	},
	{
		path: "/vehicles",
		exact: false,
		component: Vehicles,
		componentFragment: null,
	},
	{
		path: "/species/:id",
		exact: false,
		component: Popup,
		componentFragment: SpeciesFragmentPopup,
	},
	{
		path: "/species",
		exact: false,
		component: Species,
		componentFragment: null,
	},
];
