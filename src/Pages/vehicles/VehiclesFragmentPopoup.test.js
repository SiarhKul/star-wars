import { shallow } from "enzyme";
import React from "react";
import { VehiclesFragmentPopup } from "./VehiclesFragmentPopup";

jest.mock("history", () => {
	return {
		createBrowserHistory: jest.fn(() => {
			return {
				location: {
					state: {
						state: {
							name: "X-34 landspeeder",
							model: "X-34 landspeeder",
							manufacturer: "SoroSuub Corporation",
							cost_in_credits: "10550",
							length: "3.4 ",
							max_atmosphering_speed: "250",
							crew: "1",
							passengers: "1",
							cargo_capacity: "5",
							consumables: "unknown",
							vehicle_class: "repulsorcraft",
							pilots: [],
							films: ["https://swapi.dev/api/films/1/"],
						},
					},
				},
			};
		}),
	};
});

describe("Test <VehiclesFragmentPopup/>", () => {
	const component = shallow(<VehiclesFragmentPopup />);

	it("render snapshot <VehicleFragmentPopup/> ", () => {
		expect(component).toMatchSnapshot();
	});
	it("should  <VehiclesFragmentPopup/>  has required fields", () => {});
	const requiredFields = [
		"Appearance",
		"Model:",
		"Manufacturer:",
		"Cost in credits:",
		"Length:",
		"Max atmosphering speed:",
		"Crew:",
		"Passengers:",
		"Cargo capacity:",
		"Consumables:",
		"Vehicle_class:",
		"Films:",
		"Pilots:",
	];
	expect(component.containsAllMatchingElements(requiredFields)).toBeTruthy();
});
