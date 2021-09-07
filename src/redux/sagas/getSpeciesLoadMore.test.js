import { call } from "@redux-saga/core/effects";
import { expectSaga } from "redux-saga-test-plan";
import { getMoreResources } from "../../API/getMoreResources";
import { URL_GET_MORE_SPECIES } from "../../API/urls";
import { GET_MORE_SPECIES, SET_SPECIES_TO_STORE } from "../actions/actions";
import { watcherLoadMoreDataSpecies } from "./getSpeciesLoadMore";

describe("Test getSpeciesLoadMore", () => {
	const mockedData = pageNext => ({
		results: [{}, {}],
		next: pageNext,
	});

	it("should sagas dispatch data to store  if data has been not loaded", async () => {
		const pageNumber = 2;
		const data = mockedData(null);
		await expectSaga(watcherLoadMoreDataSpecies)
			.provide([
				[call(getMoreResources, URL_GET_MORE_SPECIES, pageNumber), data],
			])
			.dispatch({ type: GET_MORE_SPECIES })
			.put({ type: SET_SPECIES_TO_STORE, payload: data.results })
			.silentRun();
	});

	it("should sagas dispatch data to store if data has been loaded", async () => {
		const pageNumber = 3;
		const data = mockedData("https://swapi.dev/api/species/?page=3");

		await expectSaga(watcherLoadMoreDataSpecies)
			.provide([
				[call(getMoreResources, URL_GET_MORE_SPECIES, pageNumber), data],
			])
			.dispatch({ type: GET_MORE_SPECIES })
			.put({ type: SET_SPECIES_TO_STORE, payload: data.results })
			.silentRun();
	});
});
