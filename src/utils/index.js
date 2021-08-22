import { toast } from "react-toastify";

export const handlerError = textError => {
	toast.error(`${textError}`, {
		position: "top-right",
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});
};

export const getAbbreviation = str => {
	if (!/\s|-/.test(str)) {
		return str[0].toUpperCase();
	}
	const formatedStr = str.match(/[a-zA-Z0-9]/g).join(""); //?

	const hasNumber = /[0-9]/.test(formatedStr);

	const abbrFullNamePerson = formatedStr.match(/[A-Z]/g);
	const abbrShortNamePerson =
		abbrFullNamePerson[0] + abbrFullNamePerson[abbrFullNamePerson.length - 1];

	const abbrShortNamePersonHasNumber = formatedStr.slice(0, 2);
	return hasNumber ? abbrShortNamePersonHasNumber : abbrShortNamePerson;
};
// console.log(getAbbreviation("J3ke-Sky"));

export const counterPage = (() => {
	const counterPage = {
		people: 1,
		planets: 1,
		starships: 1,
		vehicles: 1,
		species: 1,
	};

	return key => {
		switch (key) {
			case "people": {
				counterPage.people += 1;
				return counterPage.people;
			}

			case "planets": {
				counterPage.planets += 1;
				return counterPage.planets;
			}

			case "starships": {
				counterPage.starships += 1;
				return counterPage.starships;
			}

			case "vehicles": {
				counterPage.vehicles += 1;
				return counterPage.vehicles;
			}
			case "species": {
				counterPage.species += 1;
				return counterPage.species;
			}
			default:
				return null;
		}
	};
})();
