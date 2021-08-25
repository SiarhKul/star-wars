import React from "react";
import { People } from "./People";
import * as redux from "react-redux";

jest.mock("history", () => {
	return {
		createBrowserHistory: jest.fn(() => ({
			location: {
				pathname: "/people",
			},
		})),
	};
});

describe("<People/>", () => {
	const people = () => shallow(<People />);
	let component;
	let spyOnUseSelectorIsLoadedPeople;
	let spyOnUseSelectorContenCards;

	beforeEach(() => {
		spyOnUseSelectorIsLoadedPeople = jest
			.spyOn(redux, "useSelector")
			.mockReturnValue([{}]);
		spyOnUseSelectorContenCards = jest
			.spyOn(redux, "useSelector")
			.mockReturnValue({ isLoadedPeople: true });
		component = people();
	});

	it("render snapshot <People/> ", () => {
		expect(component).toMatchSnapshot();
	});

	it("should render <People/>", () => {
		expect(component.find("Loader")).toHaveLength(1);
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
