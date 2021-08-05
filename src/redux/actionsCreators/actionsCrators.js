import {
	iS_DATA_LOADED_FROM_SERVER,
	SET_PEOPLE_TO_STORE,
} from "../actions/actions";

export const isDataLoadedFromServer = () => {
	return { type: iS_DATA_LOADED_FROM_SERVER, payload: false };
};

export const setPeopleToStore = dataFromServer => {
	return { type: SET_PEOPLE_TO_STORE, payload: dataFromServer };
};
