import {
	SET_CLICKED_CARD_TO_STORE,
	SET_FILMS_TO_STORE,
	SET_PEOPLE_TO_STORE,
	SET_PLANETS_TO_STORE,
	SET_SPECIES_TO_STORE,
	SET_STARSHIPS_TO_STORE,
	SET_VEHICLES_TO_STORE,
} from "../../actions/actions";

const initialState = {
	people: [],
	planets: [],
	starships: [],
	films: [],
	vehicles: [],
	species: [],
	clickedCard: {},
};

export const fetch = (state = initialState, action) => {
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
		default:
			return state;
	}
};
