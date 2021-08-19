import axios from "axios";
import { getResources } from "./getResources";
import { URL_GET_PEOPLE } from "./urls";

jest.mock("axios");

describe("#fetchBundlesFromApi", () => {
	it("returns data from API", async () => {
		let results = [
			{
				mass: "77",
				name: "Luke Skywalker",
			},
			{
				mass: "75",
				name: "3PO",
			},
		];

		let response = {
			data: { results },
		};
		axios.get.mockResolvedValueOnce(response);
		const fetchedBundles = await getResources(URL_GET_PEOPLE);
		expect(fetchedBundles.results).toEqual(results);
	});

	it("redirects on failure", async () => {
		const message = "Network Error";
		axios.get.mockRejectedValueOnce(new Error(message));

		const result = await getResources(URL_GET_PEOPLE);
		expect(result).toEqual("Network Error");
	});
});
