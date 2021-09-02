import { shallow } from "enzyme";
import React from "react";
import { PeopleFragmenPopup } from "./PeopleFragmenPopup";

jest.mock("history", () => {
	return {
		createBrowserHistory: jest.fn(() => {
			return {
				location: {
					state: {
						name: "Luke Skywalker",
						height: "172",
						mass: "77",
						hair_color: "blond",
						skin_color: "fair",
						eye_color: "blue",
						birth_year: "19BBY",
						gender: "male",
						homeworld: "https://swapi.dev/api/planets/1/",
						films: ["https://swapi.dev/api/films/6/"],
						species: [],
						vehicles: ["https://swapi.dev/api/vehicles/30/"],
						starships: ["https://swapi.dev/api/starships/22/"],
					},
				},
			};
		}),
	};
});

describe("Test <PeopleFragmentPopup/>", () => {
	const peopleFragmentPopup = () => shallow(<PeopleFragmenPopup />);
	const component = peopleFragmentPopup();

	it("render snapshot <PeopleFragmentPopup/>", () => {
		expect(component).toMatchSnapshot();
	});

	it("should <PeopleFragmentPopup/> have heading", () => {
		const requiredFields = [
			"Appearance",
			"Hair color:",
			"Skin color:",
			"Eye color:",
			"Gender:",
			"Stats",
			"Height:",
			"Mass:",
			"Films:",
			"Vehicles:",
			"Starships:",
		];

		expect(component.containsAllMatchingElements(requiredFields)).toBeTruthy();
	});
});
