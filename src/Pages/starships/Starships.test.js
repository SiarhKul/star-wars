import React from "react";
import { Provider } from "react-redux";
import { Starships } from "./Starships";
import configureStore from "redux-mock-store";

const mockStore = configureStore();

describe("Test <Starships/>", () => {
	let component;
	let store;

	const getMockInitialStore = showButton => {
		return {
			dataFromServer: {
				starships: [],
			},
			loading: {
				isLoadedStarships: showButton,
			},
			router: {
				location: {
					pathname: "/starships",
				},
			},
		};
	};

	const starhips = () =>
		mount(
			<Provider store={store}>
				<Starships />
			</Provider>
		);

	beforeEach(() => {
		store = mockStore(getMockInitialStore(true));
		component = starhips();
	});

	it("render snapshot <Starships/> ", () => {
		expect(component).toMatchSnapshot();
	});

	it("should render ButtonLoadMore in <Starships/> if  all data has been loaded", () => {
		expect(component.find("ButtonLoadMore").exists()).toBe(false);
	});

	it("should render ButtonLoadMore in <Starships/> if  all data has not been loaded", () => {
		store = mockStore(getMockInitialStore(false));
		component = starhips();
		expect(component.find("ButtonLoadMore").exists()).toBe(true);
	});

	it("should render alert message in  <Starships/>", () => {
		expect(component.find("ToastContainer")).toHaveLength(1);
	});

	it("should render  <Starships/>", () => {
		expect(component.find("Cards")).toHaveLength(1);
	});
});
