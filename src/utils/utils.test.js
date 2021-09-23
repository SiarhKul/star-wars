import axios from "axios";
import { counterPage, getAbbreviation } from ".";
import { URL_GET_PEOPLE } from "../API/urls";
import { getResources } from "../API/getResources";

jest.mock("axios");

describe("Is the name-to-abbreviation conversion correct", () => {
	let response;
	let results;

	beforeEach(() => {
		results = [
			{
				name: "Luke Skywalker",
			},
			{
				name: "P3O",
			},
			{
				name: "P-3O",
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

	it("has abbr number", async () => {
		const resp = await getResources(URL_GET_PEOPLE);
		const abbr = getAbbreviation(resp.results[2].name);
		const number = abbr.match(/\d/)[0];
		expect(typeof parseInt(number)).toBe("number");
	});

	it("is abbr a string", async () => {
		const resp = await getResources(URL_GET_PEOPLE);
		const abbr = getAbbreviation(resp.results[1].name);
		expect(typeof abbr).toBe("string");
	});
});

describe("should counter returns data", () => {
	it("should counter increase when pass 'people'", () => {
		expect(counterPage("people")).toBe(2);
	});
	it("should counter increase when pass 'planets'", () => {
		expect(counterPage("planets")).toBe(2);
	});
	it("should counter increase when pass 'starships'", () => {
		expect(counterPage("starships")).toBe(2);
	});
	it("should counter increase when pass 'vehicles'", () => {
		expect(counterPage("vehicles")).toBe(2);
	});
	it("should counter increase when pass 'species'", () => {
		expect(counterPage("species")).toBe(2);
	});
	it("should counter increase when pass 'species'", () => {
		expect(counterPage()).toBeNull();
	});
});
