import axios from "axios";
import { getResources } from "./getResources";
import { getSpecificResours } from "./getSpecificResours";
import { URL_GET_PEOPLE } from "./urls";

jest.mock("axios");
describe("Test API", () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	describe("Function testing 'getResources'", () => {
		let results = [
			{
				name: "Luke Skywalker",
			},
			{
				name: "3PO",
			},
		];
		let response = { status: 200, data: { results } };
		it(" should function returns data from API", async () => {
			axios.get.mockResolvedValue(response);
			const fetchedBundles = await getResources(URL_GET_PEOPLE);
			expect(fetchedBundles.results).toEqual(results);
			expect(axios.get).toHaveBeenCalledWith(URL_GET_PEOPLE);
			expect(axios.get).toHaveBeenCalledTimes(1);
		});

		it("should function excepts error", async () => {
			const message = "Network Error";
			axios.get.mockRejectedValueOnce(new Error(message));
			const result = await getResources(URL_GET_PEOPLE);
			expect(result).toEqual(message);
		});
	});

	describe("Function testing 'getResources'", () => {
		const results = {
			climate: "arid",
			created: "2014-12-09T13:50:49.641000Z",
			diameter: "10465",
			edited: "2014-12-20T20:58:18.411000Z",
		};

		let response = {
			status: 200,
			data: results,
		};

		const url = "https://swapi.dev/api/films/2/";

		it(" should function returns data from API", async () => {
			axios.get.mockResolvedValue(response);
			const fetchedSpecificResours = await getSpecificResours(url);
			expect(fetchedSpecificResours).toEqual(results);
			expect(axios.get).toHaveBeenCalledWith(url);
			expect(axios.get).toHaveBeenCalledTimes(1);
		});

		it("should function excepts error", async () => {
			const message = "Network Error";
			axios.get.mockRejectedValueOnce(new Error(message));
			const result = await getSpecificResours(url);
			expect(result).toEqual(message);
		});
	});
});
