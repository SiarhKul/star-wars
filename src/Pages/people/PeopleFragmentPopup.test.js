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
	let component;

	beforeEach(() => {
		component = peopleFragmentPopup();
	});

	it("render snapshot <PeopleFragmentPopup/>", () => {
		expect(component).toMatchSnapshot();
	});

	it("should <PeopleFragmentPopup/> have heading", () => {
		expect(component.text().includes("Appearance")).toBeTruthy();
		expect(component.text().includes("Hair color")).toBeTruthy();
		expect(component.text().includes("Skin color")).toBeTruthy();
		expect(component.text().includes("Mass")).toBeTruthy();
		expect(component.text().includes("Gender")).toBeTruthy();
		expect(component.text().includes("Stats")).toBeTruthy();
		expect(component.text().includes("Height")).toBeTruthy();
		expect(component.text().includes("Mass")).toBeTruthy();
		expect(component.text().includes("Home word")).toBeTruthy();
		expect(component.text().includes("Films")).toBeTruthy();
		expect(component.text().includes("Vehicles")).toBeTruthy();
		expect(component.text().includes("Starships")).toBeTruthy();
	});
});
