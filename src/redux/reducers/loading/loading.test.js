import { initialLoadingState, loading } from ".";
import {
	iS_DATA_LOADED_FROM_SERVER,
	IS_PEOPLE_LOADED,
	IS_PLANETS_LOADED,
	IS_SPECIES_SPECIES,
	IS_STARSHIPS_LOADED,
	IS_VEHICLES_LOADED,
} from "../../actions/actions";

describe("loading reduser", () => {
	it("should dispatch actions", () => {
		const actions = [
			{
				action: { type: IS_PEOPLE_LOADED },
				returnValue: { isLoadedPeople: true },
			},
			{
				action: { type: IS_PLANETS_LOADED },
				returnValue: { isLoadedPlanets: true },
			},
			{
				action: { type: IS_STARSHIPS_LOADED },
				returnValue: { isLoadedStarships: true },
			},
			{
				action: { type: IS_SPECIES_SPECIES },
				returnValue: { isLoadedSpecies: true },
			},
			{
				action: { type: IS_VEHICLES_LOADED },
				returnValue: { isLoadedVehicles: true },
			},
		];

		actions.forEach(ele => {
			expect(loading(initialLoadingState, ele.action)).toEqual({
				...initialLoadingState,
				...ele.returnValue,
			});
		});
	});

	it("should toggle action to 'ON' after fetching data from server ", () => {
		const action = { type: iS_DATA_LOADED_FROM_SERVER, payload: false };
		expect(loading(initialLoadingState, action)).toEqual({
			...initialLoadingState,
			isDataLoadedFromServer: false,
		});
	});

	it("should toggle action to 'OFF' after fetching data from server ", () => {
		const prevLoadingState = {
			isLoadedPeople: false,
			isLoadedPlanets: false,
			isLoadedStarships: false,
			isLoadedVehicles: false,
			isLoadedSpecies: false,
			isDataLoadedFromServer: false,
		};
		const action = { type: iS_DATA_LOADED_FROM_SERVER, payload: true };
		expect(loading(prevLoadingState, action)).toEqual({
			...prevLoadingState,
			isDataLoadedFromServer: true,
		});
	});
});
