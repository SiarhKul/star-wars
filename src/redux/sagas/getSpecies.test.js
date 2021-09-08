import { call, select } from "@redux-saga/core/effects";
import { LOCATION_CHANGE } from "connected-react-router";
import { expectSaga } from "redux-saga-test-plan";
import { getResources } from "../../API/getResources";
import { URL_GET_SPECIES } from "../../API/urls";
import { SET_SPECIES_TO_STORE } from "../actions/actions";
import { isDataLoadedFromServer } from "../actionsCreators/actionsCreators";
import { selectState } from "../selectors/selectors";
import { watcherLoadDataSpecies } from "./getSpecies";

describe("Test sagas getSpecies", () => {
	const mockedResponse = {
		results: [{}],
	};

	const mockedBrowserHistory = {
		location: {
			pathname: "/species",
		},
	};

	const getMockedRootStore = (pathname, dataItem) => ({
		dataFromServer: {
			species: dataItem,
		},
		router: {
			location: {
				pathname: pathname,
			},
		},
	});

	it("should sagas dispatch data to store", async () => {
		const mockedRootStore = getMockedRootStore("", []);

		await expectSaga(watcherLoadDataSpecies)
			.provide([
				[select(selectState), mockedRootStore],
				[call(getResources, URL_GET_SPECIES), mockedResponse],
			])
			.take(LOCATION_CHANGE)
			.dispatch({ type: LOCATION_CHANGE, payload: mockedBrowserHistory })

			.put(isDataLoadedFromServer(true))
			.put({ type: SET_SPECIES_TO_STORE, payload: mockedResponse.results })
			.put(isDataLoadedFromServer(false))

			.silentRun();
	});

	it("should watcher sagas call worker sagas if path url is not correct", async () => {
		const mockedRootStore = getMockedRootStore("/species", [{}]);
		const resultsTesObj = await expectSaga(watcherLoadDataSpecies)
			.provide([
				[select(selectState), mockedRootStore],
				[call(getResources, URL_GET_SPECIES), mockedResponse],
			])
			.take(LOCATION_CHANGE)
			.dispatch({ type: LOCATION_CHANGE, payload: mockedBrowserHistory })
			.silentRun();
		expect(resultsTesObj.effects.call).toBeUndefined();
	});
});
