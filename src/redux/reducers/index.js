import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import { loadingReducer } from "./loading";
import { fetchReducer } from "./fetch";

export const history = createBrowserHistory();
console.log(history);

const rootReducer = combineReducers({
	dataFromServer: fetchReducer,
	loading: loadingReducer,
	router: connectRouter(history),
});

export default rootReducer;
