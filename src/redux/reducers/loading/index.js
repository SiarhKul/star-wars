import {
	iS_DATA_LOADED_FROM_SERVER,
	IS_PEOPLE_LOADED,
	IS_PLANETS_LOADED,
	IS_SPECIES_SPECIES,
	IS_STARSHIPS_LOADED,
	IS_VEHICLES_LOADED,
} from "../../actions/actions";

const initialLoadingState = {
	isLoaded: false,
	isLoadedPlanets: false,
	isLoadedStarships: false,
	isLoadedVehicles: false,
	isLoadedSpecies: false,
	isDataLoadedFromServer: true,
};

export const loading = (state = initialLoadingState, action) => {
	switch (action.type) {
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

		case iS_DATA_LOADED_FROM_SERVER: {
			return {
				...state,
				isDataLoadedFromServer: action.payload,
			};
		}

		default:
			return state;
	}
};
