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
