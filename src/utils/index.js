import { toast } from 'react-toastify';

export const handlerError = (textError) => {
  toast.error(`${textError}`, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const getAbbreviation = (str) => {
  if (!/\s|-/.test(str)) {
    return str[0].toUpperCase();
  }
  const formatedStr = str.match(/[a-zA-Z0-9]/g).join(''); // ?

  const hasNumber = /[0-9]/.test(formatedStr);

  const abbrFullNamePerson = formatedStr.match(/[A-Z]/g);
  const abbrShortNamePerson =		abbrFullNamePerson[0] + abbrFullNamePerson[abbrFullNamePerson.length - 1];

  const abbrShortNamePersonHasNumber = formatedStr.slice(0, 2);
  return hasNumber ? abbrShortNamePersonHasNumber : abbrShortNamePerson;
};

export const counterPage = (() => {
  const counter = {
    people: 1,
    planets: 1,
    starships: 1,
    vehicles: 1,
    species: 1,
  };

  return (key) => {
    switch (key) {
      case 'people': {
        counter.people += 1;
        return counter.people;
      }

      case 'planets': {
        counter.planets += 1;
        return counter.planets;
      }

      case 'starships': {
        counter.starships += 1;
        return counter.starships;
      }

      case 'vehicles': {
        counter.vehicles += 1;
        return counter.vehicles;
      }
      case 'species': {
        counter.species += 1;
        return counter.species;
      }
      default:
        return null;
    }
  };
})();
