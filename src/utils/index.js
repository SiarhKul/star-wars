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
	const formatedStr = str.match(/[a-zA-Z0-9]/g).join("");
	const hasNumber = /[0-9]/.test(formatedStr);
	const abbrFullNamePerson = formatedStr.match(/[A-Z]/g);
	const abbrShortNamePerson =
		abbrFullNamePerson[0] + abbrFullNamePerson[abbrFullNamePerson.length - 1];

	return hasNumber ? formatedStr.slice(0, 2) : abbrShortNamePerson;
};

export const counterPage = (function () {
	let counter = 1;
	return function () {
		return (counter += 1);
	};
})();
