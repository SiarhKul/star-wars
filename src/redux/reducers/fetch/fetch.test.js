import {
	SET_FILMS_TO_STORE,
	SET_PEOPLE_TO_STORE,
	SET_PLANETS_TO_STORE,
	SET_SPECIES_TO_STORE,
	SET_STARSHIPS_TO_STORE,
	SET_VEHICLES_TO_STORE,
} from "../../actions/actions";
import { fetchReducer } from "./index";
import { initialFetchState } from "./index";

describe("Test fetchReducer", () => {
	it("Should to write data to the reducer after performing an action ", () => {
		const payload = [{}, {}, {}];
		const actions = [
			{
				action: { type: SET_PEOPLE_TO_STORE, payload },
				returnValue: "people",
			},
			{
				action: { type: SET_PLANETS_TO_STORE, payload },
				returnValue: "planets",
			},
			{
				action: { type: SET_STARSHIPS_TO_STORE, payload },
				returnValue: "starships",
			},
			{
				action: { type: SET_FILMS_TO_STORE, payload },
				returnValue: "films",
			},
			{
				action: { type: SET_VEHICLES_TO_STORE, payload },
				returnValue: "vehicles",
			},
			{
				action: { type: SET_SPECIES_TO_STORE, payload },
				returnValue: "species",
			},
		];

		actions.forEach(element => {
			expect(fetchReducer(initialFetchState, element.action)).toEqual({
				...initialFetchState,
				[element.returnValue]: [
					...initialFetchState[element.returnValue],
					...element.action.payload,
				],
			});
		});
	});
});
