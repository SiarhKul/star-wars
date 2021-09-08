import { expectSaga } from "redux-saga-test-plan";
import { getMoreResources } from "../../API/getMoreResources";
import { URL_GET_MORE_PEOPLE } from "../../API/urls";
import { watchLoadMoreDataPeople } from "./getPeopleLoadMore";
import { call } from "redux-saga/effects";
import {
	GET_MORE_PEOPLE,
	IS_PEOPLE_LOADED,
	SET_PEOPLE_TO_STORE,
} from "../actions/actions";
import rootReducer from "../reducers";

describe("Test getPeopleLoadMore saga", () => {
	const mockedRootStore = {
		dataFromServer: { people: [] },
		loading: { isLoadedPeople: false, isDataLoadedFromServer: true },
		router: {
			location: {
				pathname: "",
			},
		},
	};

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

	it("should sagas dispatch data to store  if data has been not loaded", async () => {
		const data = mockedData(null);
		const finalState = reqiredState(true);
		const pageNumber = 2;

		await expectSaga(watchLoadMoreDataPeople)
			.provide([
				[call(getMoreResources, URL_GET_MORE_PEOPLE, pageNumber), data],
			])
			.withReducer(rootReducer, mockedRootStore)
			.dispatch({ type: GET_MORE_PEOPLE })
			.put({ type: SET_PEOPLE_TO_STORE, payload: data.results })
			.put({ type: IS_PEOPLE_LOADED })
			.hasFinalState(finalState)
			.silentRun();
	});

	it("should sagas dispatch data to store if data has been loaded", async () => {
		const data = mockedData("https://swapi.dev/api/people/?page=1");
		const finalState = reqiredState(false);
		const pageNumber = 3;

		await expectSaga(watchLoadMoreDataPeople)
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
