import { handlerError } from "../utils/index";
import axios from "axios";

export const getSpecificResours = async url => {
	try {
		const { data } = await axios.get(url);
		return data;
	} catch (error) {
		handlerError(error.message);
	}
};

// async function processArray(array) {
// 	for (const url of array) {
// 		const res = await getSpecificResours(url);
// 		console.log(res);
// 	}

// 	console.log("done");
// }

// processArray([
// 	"https://swapi.dev/api/starships/12/",
// 	"https://swapi.dev/api/starships/22/",
// ]);
