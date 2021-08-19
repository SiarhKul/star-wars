import axios from "axios";
import { getAbbreviation } from ".";
import { URL_GET_PEOPLE } from "../API/urls";
import { getResources } from "../API/getResources";

jest.mock("axios");

describe("Is the name-to-abbreviation conversion correct", () => {
	let response;
	let results;

	beforeEach(() => {
		results = [
			{
				mass: "77",
				name: "Luke Skywalker",
			},
			{
				mass: "75",
				name: "3PO",
			},
		];

		response = {
			data: { results },
		};

		axios.get.mockResolvedValueOnce(response);
	});
	it("has abbr 2 symbol", async () => {
		const resp = await getResources(URL_GET_PEOPLE);

		const abbr = getAbbreviation(resp.results[0].name);
		expect(abbr.length).toBe(2);
	});

	it("has abbr 1 symbol", async () => {
		const resp = await getResources(URL_GET_PEOPLE);
		const abbr = getAbbreviation(resp.results[1].name);
		expect(abbr.length).toBe(1);
	});

	it("is abbr a string", async () => {
		const resp = await getResources(URL_GET_PEOPLE);
		const abbr = getAbbreviation(resp.results[1].name);
		expect(typeof abbr).toBe("string");
	});
});
