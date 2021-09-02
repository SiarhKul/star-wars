import axios from "axios";
import { handlerError } from "../utils";

export const getSpecificResours = async url => {
	try {
		const { data } = await axios.get(url);
		return data;
	} catch (error) {
		handlerError(error.message);
		return error.message;
	}
};

export const getSpecificResoursAll = async urls => {
	const promises = urls?.map(url => getSpecificResours(url));
	const resources = await Promise.all(promises);
	return resources;
};
