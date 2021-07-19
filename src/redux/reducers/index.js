import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import {
	SET_PEOPLE_TO_STORE,
	IS_LOADED_PEOPLE,
	SET_PLANETS_TO_STORE,
	IS_LOADED_PLANETS,
	SET_STARSHIPS_TO_STORE,
	IS_LOADED_STARSHIPS,
	SET_FILMS_TO_STORE,
} from "../actions/actions";

const initial = {
	people: [],
	planets: [],
	starships: [],
	films: [],
	isLoaded: false,
	isLoadedPlanets: false,
	isLoadedStarships: false,
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

		case IS_LOADED_PEOPLE: {
			return {
				...state,
				isLoaded: true,
			};
		}
		case IS_LOADED_PLANETS: {
			return {
				...state,
				isLoadedPlanets: true,
			};
		}
		case IS_LOADED_STARSHIPS: {
			return {
				...state,
				isLoadedStarships: true,
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
