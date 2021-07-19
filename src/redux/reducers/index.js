import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import {
	SET_PEOPLE,
	IS_LOADED,
	SET_PLANETS,
	IS_LOADED_PLANETS,
	SET_STARSHIPS_TO_STORE,
	IS_LOADED_STARSHIPS,
} from "../actions/actions";

const initial = {
	people: [],
	planets: [],
	starships: [],
	isLoaded: false,
	isLoadedPlanets: false,
	isLoadedStarships: false,
};

export const history = createBrowserHistory();

export const appReducer = (state = initial, action) => {
	switch (action.type) {
		case SET_PEOPLE: {
			return {
				...state,
				people: [...state.people, ...action.payload],
			};
		}

		case SET_PLANETS: {
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

		case IS_LOADED: {
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
