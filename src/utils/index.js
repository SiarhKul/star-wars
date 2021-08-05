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

	const formatedStr = str.match(/[a-zA-Z0-9]/g).join("");
	const hasNumber = /[0-9]/.test(formatedStr);
	const abbrFullNamePerson = formatedStr.match(/[A-Z]/g) || ["U"];
	const abbrShortNamePerson =
		abbrFullNamePerson[0] + abbrFullNamePerson[abbrFullNamePerson.length - 1];
	return hasNumber ? formatedStr.slice(0, 2) : abbrShortNamePerson;
};

export const counterPage = (function () {
	const counterPage = {
		people: 1,
		planets: 1,
		starships: 1,
		vehicles: 1,
		species: 1,
	};

	return function (key) {
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
				break;
		}
	};
})();

export const clickedCard = (arr, filteredElem, name) => {
	return arr.find(elem => {
		return elem[name] === filteredElem;
	});
};
