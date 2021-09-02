import { mount } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import { Vehicles } from "./Vehicles";
import configureStore from "redux-mock-store";

const mockStore = configureStore();

describe("Test <Vehicles/>", () => {
	let store;
	let component;

	const getMockInitialStore = showButton => {
		return {
			dataFromServer: {
				vehicles: [],
			},
			loading: {
				isLoadedVehicles: showButton,
			},
			router: {
				location: {
					pathname: "/vehicles",
				},
			},
		};
	};

	const starships = () =>
		mount(
			<Provider store={store}>
				<Vehicles />
			</Provider>
		);

	beforeEach(() => {
		store = mockStore(getMockInitialStore(true));
		component = starships();
	});

	it("render snapshot <Vehicles/>", () => {
		expect(component).toMatchSnapshot();
	});

	it("should render ButtonLoadMore in <Vehicles/> if  all data has been loaded", () => {
		expect(component.find("ButtonLoadMore").exists()).toBeFalsy();
	});

	it("should render ButtonLoadMore in <Starships/> if  all data has not been loaded", () => {
		store = mockStore(getMockInitialStore(false));
		component = starships();
		expect(component.find("ButtonLoadMore").exists()).toBeTruthy();
	});

	it("should render alert message in <Starships/>", () => {
		expect(component.find("ToastContainer")).toHaveLength(1);
	});

	it("should render <Starships/>", () => {
		expect(component.find("Cards")).toHaveLength(1);
	});
});
