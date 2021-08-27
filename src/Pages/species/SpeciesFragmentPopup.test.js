import React from "react";
import { SpeciesFragmentPopup } from "./SpeciesFragmentPopup";

jest.mock("history", () => {
	return {
		createBrowserHistory: jest.fn(() => {
			return {
				location: {
					state: {
						name: "Rodian",
						classification: "sentient",
						designation: "reptilian",
						skin_colors: "green, blue",
						hair_colors: "n/a",
						eye_colors: "black",
						average_lifespan: "unknown",
						people: ["https://swapi.dev/api/people/15/"],
						films: ["https://swapi.dev/api/films/1/"],
					},
				},
			};
		}),
	};
});

describe("Test <SpeciesFragmentPopup/>", () => {
	const speciesFragmentPopup = () => shallow(<SpeciesFragmentPopup />);
	let component;

	beforeEach(() => {
		component = speciesFragmentPopup();
	});

	it("render snapshot <SpeciesFragmentPopup/> ", () => {
		expect(component).toMatchSnapshot();
	});

	it("should  <SpeciesFragmentPopup/>  has required fields", () => {
		expect(component.text().includes("Appearance")).toBeTruthy();
		expect(component.text().includes("Designation:")).toBeTruthy();
		expect(component.text().includes("Skin colors:")).toBeTruthy();
		expect(component.text().includes("Hair colors:")).toBeTruthy();
		expect(component.text().includes("Eye colors:")).toBeTruthy();
		expect(component.text().includes("Language:")).toBeTruthy();
		expect(component.text().includes("Residents:")).toBeTruthy();
		expect(component.text().includes("Films:")).toBeTruthy();
	});
});
