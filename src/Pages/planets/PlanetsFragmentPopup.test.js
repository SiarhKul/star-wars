import { shallow } from "enzyme";
import React from "react";
import { PlanetsFragmentPopup } from "./PlanetsFragmentPopup";

jest.mock("history", () => {
	return {
		createBrowserHistory: jest.fn(() => {
			return {
				location: {
					state: {
						name: "Tatooine",
						rotation_period: "23",
						diameter: "10465",
						climate: "arid",
						gravity: "1 standard",
						terrain: "desert",
						surface_water: "1",
						population: "200000",
						residents: ["https://swapi.dev/api/people/1/"],
						films: ["https://swapi.dev/api/films/1/"],
					},
				},
			};
		}),
	};
});

describe("Test <PlanetsFragmentPopup/>", () => {
	const planetsFragmentPopup = () => shallow(<PlanetsFragmentPopup />);
	let component;

	beforeEach(() => {
		component = planetsFragmentPopup();
	});

	it("render snapshot <PlanetsFragmentPopup/>", () => {
		expect(component).toMatchSnapshot();
	});

	it("should  <PlanetsFragmentPopup/> has required fields", () => {
		expect(component.text().includes("Appearance")).toBeTruthy();
		expect(component.text().includes("Rotation period:")).toBeTruthy();
		expect(component.text().includes("Period period")).toBeTruthy();
		expect(component.text().includes("Diameter:")).toBeTruthy();
		expect(component.text().includes("Climate:")).toBeTruthy();
		expect(component.text().includes("Gravity:")).toBeTruthy();
		expect(component.text().includes("Terrain:")).toBeTruthy();
		expect(component.text().includes("Surface water:")).toBeTruthy();
		expect(component.text().includes("Population:")).toBeTruthy();
		expect(component.text().includes("Residents:")).toBeTruthy();
		expect(component.text().includes("Films:")).toBeTruthy();
	});
});
