import { call } from "@redux-saga/core/effects";
import { expectSaga } from "redux-saga-test-plan";
import { getMoreResources } from "../../API/getMoreResources";
import { URL_GET_MORE_PLANETS } from "../../API/urls";
import { GET_MORE_PLANETS, SET_PLANETS_TO_STORE } from "../actions/actions";
import { watchLoadMoreDataPlanets } from "./getPlanetsLoadMore";

describe("Test getPlanetsLoadMore saga", () => {
	const mockedData = pageNext => ({
		results: [{}, {}],
		next: pageNext,
	});

	it("should sagas dispatch data to store  if data has been not loaded", async () => {
		const pageNumber = 2;
		const data = mockedData(null);
		await expectSaga(watchLoadMoreDataPlanets)
			.provide([
				[call(getMoreResources, URL_GET_MORE_PLANETS, pageNumber), data],
			])
			.dispatch({ type: GET_MORE_PLANETS })
			.put({ type: SET_PLANETS_TO_STORE, payload: data.results })
			.silentRun();
	});

	it("should sagas dispatch data to store if data has been loaded", async () => {
		const pageNumber = 3;
		const data = mockedData("https://swapi.dev/api/planets/?page=3");

		await expectSaga(watchLoadMoreDataPlanets)
			.provide([
				[call(getMoreResources, URL_GET_MORE_PLANETS, pageNumber), data],
			])
			.dispatch({ type: GET_MORE_PLANETS })
			.put({ type: SET_PLANETS_TO_STORE, payload: data.results })
			.silentRun();
	});
});
