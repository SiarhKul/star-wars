import { call } from "@redux-saga/core/effects";
import { expectSaga } from "redux-saga-test-plan";
import { getMoreResources } from "../../API/getMoreResources";
import { URL_GET_MORE_STARHIPS } from "../../API/urls";
import { GET_MORE_STARSHIPS, SET_STARSHIPS_TO_STORE } from "../actions/actions";
import { watchLoadMoreDataStarships } from "./getStarshipsLoadMore";

describe("Test getSpeciesLoadMore", () => {
	const mockedData = pageNext => ({
		results: [{}, {}],
		next: pageNext,
	});

	it("should sagas dispatch data to store  if data has been not loaded", async () => {
		const pageNumber = 2;
		const data = mockedData(null);
		await expectSaga(watchLoadMoreDataStarships)
			.provide([
				[call(getMoreResources, URL_GET_MORE_STARHIPS, pageNumber), data],
			])
			.dispatch({ type: GET_MORE_STARSHIPS })
			.put({ type: SET_STARSHIPS_TO_STORE, payload: data.results })
			.silentRun();
	});

	it("should sagas dispatch data to store if data has been loaded", async () => {
		const pageNumber = 3;
		const data = mockedData("https://swapi.dev/api/starships/?page=3");

		await expectSaga(watchLoadMoreDataStarships)
			.provide([
				[call(getMoreResources, URL_GET_MORE_STARHIPS, pageNumber), data],
			])
			.dispatch({ type: GET_MORE_STARSHIPS })
			.put({ type: SET_STARSHIPS_TO_STORE, payload: data.results })
			.silentRun();
	});
});
