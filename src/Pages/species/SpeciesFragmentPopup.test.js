import React from "react";
import { SpeciesFragmentPopup } from "./SpeciesFragmentPopup";
import { shallow } from "enzyme";

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
	const component = speciesFragmentPopup();

	it("render snapshot <SpeciesFragmentPopup/> ", () => {
		expect(component).toMatchSnapshot();
	});

	it("should  <SpeciesFragmentPopup/>  has required fields", () => {
		const requireFields = [
			"Appearance",
			"Designation:",
			"Skin colors:",
			"Hair colors:",
			"Eye colors:",
			"Language:",
			"Residents:",
			"Films:",
		];
		expect(component.containsAllMatchingElements(requireFields)).toBeTruthy();
	});
});
