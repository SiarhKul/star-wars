import { call } from "@redux-saga/core/effects";
import { expectSaga } from "redux-saga-test-plan";
import { getMoreResources } from "../../API/getMoreResources";
import { URL_GET_MORE_VEHICLE } from "../../API/urls";
import { GET_MORE_VEHICLES, SET_VEHICLES_TO_STORE } from "../actions/actions";
import { watchLoadMoreDataVehicles } from "./getVehiclesLoadMore";

describe("Test getSpeciesLoadMore", () => {
	const mockedData = pageNext => ({
		results: [{}, {}],
		next: pageNext,
	});

	it("should sagas dispatch data to store  if data has been not loaded", async () => {
		const pageNumber = 2;
		const data = mockedData(null);
		await expectSaga(watchLoadMoreDataVehicles)
			.provide([
				[call(getMoreResources, URL_GET_MORE_VEHICLE, pageNumber), data],
			])
			.dispatch({ type: GET_MORE_VEHICLES })
			.put({ type: SET_VEHICLES_TO_STORE, payload: data.results })
			.silentRun();
	});

	it("should sagas dispatch data to store if data has been loaded", async () => {
		const pageNumber = 3;
		const data = mockedData("https://swapi.dev/api/starships/?page=3");

		await expectSaga(watchLoadMoreDataVehicles)
			.provide([
				[call(getMoreResources, URL_GET_MORE_VEHICLE, pageNumber), data],
			])
			.dispatch({ type: GET_MORE_VEHICLES })
			.put({ type: SET_VEHICLES_TO_STORE, payload: data.results })
			.silentRun();
	});
});
