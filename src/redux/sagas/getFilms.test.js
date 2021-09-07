import { call, select } from "@redux-saga/core/effects";
import { LOCATION_CHANGE } from "connected-react-router";
import { expectSaga } from "redux-saga-test-plan";
import { getResources } from "../../API/getResources";
import { URL_GET_FILMS } from "../../API/urls";
import { SET_FILMS_TO_STORE } from "../actions/actions";
import { isDataLoadedFromServer } from "../actionsCreators/actionsCreators";
import { selectState } from "../selectors/selectors";
import { watchLoadDataFilms } from "./getFilms";

describe("Test sagas getPlants ", () => {
	const mockedResponse = {
		results: [{}, {}],
	};

	const mockedBrowserHistory = {
		location: {
			pathname: "/films",
		},
	};

	const getMockedRootStore = (pathname, dataItem) => ({
		dataFromServer: {
			films: dataItem,
		},
		router: {
			location: {
				pathname: pathname,
			},
		},
	});

	it("should sagas dispatch data to store", async () => {
		const mockedRootStore = getMockedRootStore("", []);

		await expectSaga(watchLoadDataFilms)
			.provide([
				[select(selectState), mockedRootStore],
				[call(getResources, URL_GET_FILMS), mockedResponse],
			])
			.dispatch({ type: LOCATION_CHANGE, payload: mockedBrowserHistory })

			.put(isDataLoadedFromServer(true))
			.put({ type: SET_FILMS_TO_STORE, payload: mockedResponse.results })
			.put(isDataLoadedFromServer(false))
			.silentRun();
	});

	it("should watcher sagas call worker sagas if path url is not correct", async () => {
		const mockedRootStore = getMockedRootStore("/films", [{}]);

		const resultsTestObj = await expectSaga(watchLoadDataFilms)
			.provide([
				[select(selectState), mockedRootStore],
				[call(getResources, URL_GET_FILMS), mockedResponse],
			])
			.dispatch({ type: LOCATION_CHANGE, payload: mockedBrowserHistory })
			.silentRun();
		expect(resultsTestObj.effects.call).toBeUndefined();
	});
});
