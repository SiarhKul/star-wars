import { shallow } from "enzyme";
import React from "react";
import { StarshipsFragmentPopup } from "./StarshipsFragmentPopup";

jest.mock("history", () => {
	return {
		createBrowserHistory: jest.fn(() => {
			return {
				location: {
					state: {
						name: "Skol",
						model: "4f-B",
						manufacturer: "Red Planet",
						cost_in_credits: "44400000",
						length: "300000",
						max_atmosphering_speed: "456",
						cargo_capacity: "23",
						consumables: "0",
						hyperdrive_rating: "444",
						MGLT: "NF-3",
						starship_class: "Fast",
						people: ["https://swapi.dev/api/people/15/"],
						films: ["https://swapi.dev/api/films/1/"],
					},
				},
			};
		}),
	};
});

describe("Test <StarshipsFragmentPopup/>", () => {
	const starshipsFragmentPopup = () => shallow(<StarshipsFragmentPopup />);
	let component;

	beforeEach(() => {
		component = starshipsFragmentPopup();
	});

	it("render snapshot  <StarshipsFragmentPopup/>", () => {
		expect(component).toMatchSnapshot();
	});

	it("should  <StarshipsFragmentPopup/>  has required fields", () => {
		const requiredFields = [
			"Model:",
			"Manufacturer:",
			"Cost in credits:",
			"length:",
			"Max atmosphering speed:",
			"Passengers:",
			"Consumables:",
			"Hyperdrive rating:",
			"MGLT:",
			"Starship class:",
		];
		expect(component.containsAllMatchingElements(requiredFields)).toEqual(true);
	});
});
