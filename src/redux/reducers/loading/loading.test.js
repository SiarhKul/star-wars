import { loading } from "./index";
import { setPeopleToStore } from "../../actionsCreators/actionsCreators";

it("is type of key of object bollean", () => {
	const initialLoadingState = {
		isLoaded: false,
		isLoadedPlanets: false,
		isLoadedStarships: false,
		isLoadedVehicles: false,
		isLoadedSpecies: false,
		isDataLoadedFromServer: true,
	};

	const actionSetPeopleToStore = setPeopleToStore();

	let newLoading = loading(initialLoadingState, actionSetPeopleToStore);

	expect(typeof newLoading.isLoaded).toBe("boolean");
	expect(typeof newLoading.isLoadedPlanets).toBe("boolean");
	expect(typeof newLoading.isLoadedStarships).toBe("boolean");
	expect(typeof newLoading.isLoadedVehicles).toBe("boolean");
	expect(typeof newLoading.isLoadedSpecies).toBe("boolean");
	expect(typeof newLoading.isDataLoadedFromServer).toBe("boolean");
});
