import * as redux from "react-redux";
import { Loader } from "./Loader";
import React from "react";

describe("Test Loader component", () => {
	const loader = () => shallow(<Loader />);
	let component;
	let spyOnUseSelector;

	beforeEach(() => {
		spyOnUseSelector = jest
			.spyOn(redux, "useSelector")
			.mockReturnValue({ isDataLoadedFromServer: false });
		component = loader();
	});

	it("should 'Loader' render ", () => {
		expect(component).toMatchSnapshot();
	});

	it("should 'Loader' render if data have been loaded ", () => {
		expect(component.find("Loader").exists()).toBeFalsy();
	});
	it("should 'Loader' render if data have been loaded ", () => {
		spyOnUseSelector = jest
			.spyOn(redux, "useSelector")
			.mockReturnValue({ isDataLoadedFromServer: true });
		component = loader();
		expect(component.find("Loader").exists()).toBeTruthy();
	});
});
