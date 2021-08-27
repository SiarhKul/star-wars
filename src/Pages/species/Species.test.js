import React from "react";
import { Provider } from "react-redux";
import { Species } from "./Species";
import configureStore from "redux-mock-store";

const mockStore = configureStore();

describe("Test <Species/>", () => {
	let component;
	let store;

	const species = () =>
		mount(
			<Provider store={store}>
				<Species />
			</Provider>
		);

	const mockInitialStore = {
		dataFromServer: {
			species: [],
		},
		loading: {
			isLoadedSpecies: true,
		},
		router: {
			location: {
				pathname: "/species",
			},
		},
	};

	beforeEach(() => {
		store = mockStore(mockInitialStore);
		component = species();
	});

	it("render snapshot <Species/>", () => {
		expect(component).toMatchSnapshot();
	});

	it("should render alert message in <People/>", () => {
		expect(component.find("ToastContainer")).toHaveLength(1);
	});

	it("should render <People/>", () => {
		expect(component.find("Cards")).toHaveLength(1);
	});

	it("should render ButtonLoadMore in <People/> if  all data has been loaded", () => {
		expect(component.find("ButtonLoadMore").exists()).toBe(false);
	});
});
