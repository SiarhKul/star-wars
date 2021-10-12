import { handlerError } from "../utils";
import axios from "axios";

export const getResources = async url => {
	console.log(url)
	try {
		const { data } = await axios.get(url);
		return data;
	} catch (error) {
		handlerError(error.message);
		return error.message;
	}
};
