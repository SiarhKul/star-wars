import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import {
	SET_PEOPLE_TO_STORE,
	IS_PEOPLE_LOADED,
	SET_PLANETS_TO_STORE,
	IS_PLANETS_LOADED,
	SET_STARSHIPS_TO_STORE,
	IS_STARSHIPS_LOADED,
	SET_FILMS_TO_STORE,
	SET_VEHICLES_TO_STORE,
	IS_VEHICLES_LOADED,
	SET_SPECIES_TO_STORE,
	IS_SPECIES_SPECIES,
	SET_CLICKED_CARD_TO_STORE,
	IS_POPUP_LOADED,
} from "../actions/actions";

const initial = {
	people: [],
	planets: [],
	starships: [],
	films: [],
	vehicles: [],
	species: [],
	clickedCard: {},
	isLoaded: false,
	isLoadedPlanets: false,
	isLoadedStarships: false,
	isLoadedVehicles: false,
	isLoadedSpecies: false,
	isVisiblePopup: false,
};

export const history = createBrowserHistory();

export const appReducer = (state = initial, action) => {
	switch (action.type) {
		case SET_PEOPLE_TO_STORE: {
			return {
				...state,
				people: [...state.people, ...action.payload],
			};
		}

		case SET_PLANETS_TO_STORE: {
			return {
				...state,
				planets: [...state.planets, ...action.payload],
			};
		}

		case SET_STARSHIPS_TO_STORE: {
			return {
				...state,
				starships: [...state.starships, ...action.payload],
			};
		}

		case SET_FILMS_TO_STORE: {
			return {
				...state,
				films: [...state.films, ...action.payload],
			};
		}

		case SET_VEHICLES_TO_STORE: {
			return {
				...state,
				vehicles: [...state.vehicles, ...action.payload],
			};
		}

		case SET_SPECIES_TO_STORE: {
			return {
				...state,
				species: [...state.species, ...action.payload],
			};
		}

		case SET_CLICKED_CARD_TO_STORE: {
			return {
				...state,
				clickedCard: { ...action.payload },
			};
		}

		case IS_PEOPLE_LOADED: {
			return {
				...state,
				isLoaded: true,
			};
		}

		case IS_PLANETS_LOADED: {
			return {
				...state,
				isLoadedPlanets: true,
			};
		}

		case IS_STARSHIPS_LOADED: {
			return {
				...state,
				isLoadedStarships: true,
			};
		}

		case IS_VEHICLES_LOADED: {
			return {
				...state,
				isLoadedVehicles: true,
			};
		}

		case IS_SPECIES_SPECIES: {
			return {
				...state,
				isLoadedSpecies: true,
			};
		}

		case IS_POPUP_LOADED: {
			return {
				...state,
				isVisiblePopup: action.payload,
			};
		}

		default:
			return state;
	}
};

const rootReducer = combineReducers({
	app: appReducer,
	router: connectRouter(history),
});

export default rootReducer;
