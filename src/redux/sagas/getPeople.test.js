import { call, select } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";
import { getResources } from "../../API/getResources";
import { URL_GET_PEOPLE } from "../../API/urls";
import { watchLoadDataPeople } from "./getPeople";
import { isDataLoadedFromServer } from "../actionsCreators/actionsCreators";
import { SET_PEOPLE_TO_STORE } from "../actions/actions";
import { LOCATION_CHANGE } from "connected-react-router";
import { selectState } from "../selectors/selectors";
import rootReducer from "../reducers";

describe("Test getPeople saga", () => {
	const mockedResponse = {
		count: 82,
		next: "https://swapi.dev/api/people/?page=2",
		previous: null,
		results: [{}, {}],
	};

	const mockedBrowserHistory = {
		location: { pathname: "/people" },
	};

	it("should sagas dispatch data to store", async () => {
		const mockedRootStore = {
			dataFromServer: {
				people: [],
			},
			loading: {
				isDataLoadedFromServer: true,
			},
			router: {
				location: {
					pathname: "",
					state: null,
				},
			},
		};

		const { storeState } = await expectSaga(watchLoadDataPeople)
			.provide([
				[select(selectState), mockedRootStore],
				[call(getResources, URL_GET_PEOPLE), mockedResponse],
			])
			.withReducer(rootReducer, mockedRootStore)
			.take(LOCATION_CHANGE)
			.dispatch({ type: LOCATION_CHANGE, payload: mockedBrowserHistory })
			.put(isDataLoadedFromServer(true))
			.put({ type: SET_PEOPLE_TO_STORE, payload: mockedResponse.results })
			.put(isDataLoadedFromServer(false))
			.silentRun();

		expect(storeState.router.location.pathname).toEqual("/people");
		expect(storeState.loading.isDataLoadedFromServer).toBeFalsy();
		expect(storeState.dataFromServer.people).toEqual(mockedResponse.results);
	});

	it("should watcher sagas call worker sagas if path url is not correct", async () => {
		const mockedBrowserHistory = {
			location: {
				pathname: "/people",
			},
		};

		const mockedRootStore = {
			dataFromServer: {
				people: [{}, {}],
			},
			loading: {
				isDataLoadedFromServer: true,
			},
			router: {
				location: {
					pathname: "/people",
				},
			},
		};

		const sagaWatchLoadDataPeople = await expectSaga(watchLoadDataPeople)
			.provide([[select(selectState), mockedRootStore]])
			.withReducer(rootReducer, mockedRootStore)
			.take(LOCATION_CHANGE)
			.dispatch({ type: LOCATION_CHANGE, payload: mockedBrowserHistory })
			.run();
		expect(sagaWatchLoadDataPeople.effects.call).toBeUndefined();
	});
});