import { expectSaga } from "redux-saga-test-plan";
import { getMoreResources } from "../../API/getMoreResources";
import { URL_GET_MORE_PEOPLE } from "../../API/urls";
import { call } from "redux-saga/effects";
import {
	GET_MORE_PEOPLE,
	IS_PEOPLE_LOADED,
	SET_PEOPLE_TO_STORE,
} from "../actions/actions";
import rootReducer from "../reducers";
import { watchLoadMoreData } from "./getLoadMore";

describe("Test getPeopleLoadMore saga", () => {
	const getMockedRootStore = resource => ({
		dataFromServer: resource,
		loading: { isLoadedPeople: false, isDataLoadedFromServer: true },
		router: {
			location: {
				pathname: "",
			},
		},
	});

	const mockedData = pageNext => {
		return {
			count: 81,
			next: pageNext,
			previous: "https://swapi.dev/api/people/?page=2",
			results: [{}, {}, {}],
		};
	};

	const reqiredState = isLoaded => ({
		dataFromServer: { people: [{}, {}, {}] },
		loading: { isLoadedPeople: isLoaded, isDataLoadedFromServer: true },
		router: { location: { pathname: "" } },
	});

	const reduxActionWatcher = GET_MORE_PEOPLE;
	const resource = "people";
	const urlGETmore = URL_GET_MORE_PEOPLE;
	const reduxActionFetch = SET_PEOPLE_TO_STORE;
	const reduxActionLoaded = IS_PEOPLE_LOADED;

	it("should sagas dispatch data to store  if data has been not loaded", async () => {
		const resourceFetched = { people: [{}, {}, {}] };
		const mockedRootStore = getMockedRootStore(resourceFetched);
		const data = mockedData(null);
		const finalState = reqiredState(true);
		const pageNumber = 2;

		await expectSaga(
			watchLoadMoreData,
			reduxActionWatcher,
			resource,
			urlGETmore,
			reduxActionFetch,
			reduxActionLoaded
		)
			.provide([
				[call(getMoreResources, URL_GET_MORE_PEOPLE, pageNumber), data],
			])
			.withReducer(rootReducer, mockedRootStore)
			.dispatch({ type: GET_MORE_PEOPLE })
			.put({ type: IS_PEOPLE_LOADED })
			.hasFinalState(finalState)
			.silentRun();
	});

	it("should sagas dispatch data to store if data has been loaded", async () => {
		const data = mockedData("https://swapi.dev/api/people/?page=1");
		const finalState = reqiredState(false);
		const pageNumber = 3;
		const resourceFetched = { people: [] };
		const mockedRootStore = getMockedRootStore(resourceFetched);

		await expectSaga(
			watchLoadMoreData,
			reduxActionWatcher,
			resource,
			urlGETmore,
			reduxActionFetch,
			reduxActionLoaded
		)
			.provide([
				[call(getMoreResources, URL_GET_MORE_PEOPLE, pageNumber), data],
			])
			.withReducer(rootReducer, mockedRootStore)
			.dispatch({ type: GET_MORE_PEOPLE })
			.put({ type: SET_PEOPLE_TO_STORE, payload: data.results })
			.hasFinalState(finalState)
			.silentRun();
	});
});
