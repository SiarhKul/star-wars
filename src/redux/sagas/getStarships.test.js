import { select } from "@redux-saga/core/effects";
import { LOCATION_CHANGE } from "connected-react-router";
import { expectSaga } from "redux-saga-test-plan";
import { call } from "redux-saga-test-plan/matchers";
import { getResources } from "../../API/getResources";
import { URL_GET_STARSHIPS } from "../../API/urls";
import { SET_STARSHIPS_TO_STORE } from "../actions/actions";
import { isDataLoadedFromServer } from "../actionsCreators/actionsCreators";
import { selectState } from "../selectors/selectors";
import { watchLoadDataStarships } from "./getStarships";

describe("Test sagas getSpecies", () => {
	const data = {
		results: [{}],
	};

	const mockedBrowserLocation = {
		location: {
			pathname: "starships",
		},
	};

	const getMockedRootStore = (pathname, dataItem) => ({
		dataFromServer: {
			starships: dataItem,
		},
		router: {
			location: {
				pathname: pathname,
			},
		},
	});

	it("should sagas dispatch data to store", async () => {
		const mockedRootStore = getMockedRootStore("", []);
		await expectSaga(watchLoadDataStarships)
			.provide([
				[select(selectState), mockedRootStore],
				[call(getResources, URL_GET_STARSHIPS), data],
			])

			.dispatch({ type: LOCATION_CHANGE, payload: mockedBrowserLocation })

			.put(isDataLoadedFromServer(true))
			.put({ type: SET_STARSHIPS_TO_STORE, payload: data.results })
			.put(isDataLoadedFromServer(false))
			.silentRun();
	});

	it("should watcher sagas call worker sagas if path url is not correct", async () => {
		const mockedRootStore = getMockedRootStore("/starhips", [{}]);
		const resultsTestObj = await expectSaga(watchLoadDataStarships)
			.provide([
				[select(selectState), mockedRootStore],
				[call(getResources, URL_GET_STARSHIPS), data],
			])
			.dispatch({ type: LOCATION_CHANGE, payload: mockedBrowserLocation })
			.silentRun();
		expect(resultsTestObj.effects.call).toBeUndefined();
	});
});
