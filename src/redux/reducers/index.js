import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import { SET_PEOPLE, IS_LOADED, SET_PLANETS } from "../actions/actions";

const initial = {
	people: [],
	planets: [],
	starships: [],
	isLoaded: false,
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

		case IS_LOADED: {
			return {
				...state,
				isLoaded: true,
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
