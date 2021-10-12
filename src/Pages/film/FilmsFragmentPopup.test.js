import React from 'react';
import { shallow } from 'enzyme';

import { FilmsFragmentPopup } from './FilmsFragmentPopup';

jest.mock('history', () => ({
  createBrowserHistory: jest.fn(() => ({
    location: {
      state: {
        title: 'A New Hope',
        episode_id: 3,
        opening_crawl:
						"It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
        director: 'George Lucas',
        producer: 'Gary Kurtz, Rick McCallum',
        release_date: '1977-05-25',
        characters: ['https://swapi.dev/api/people/1/'],
        planets: ['https://swapi.dev/api/planets/1/'],
        starships: ['https://swapi.dev/api/starships/2/'],
        vehicles: ['https://swapi.dev/api/vehicles/4/'],
        species: ['https://swapi.dev/api/species/1/'],
      },
    },
  })),
}));

describe('Test <FilmsFragmentPopup/>', () => {
  const filmsFragmentPopup = () => shallow(<FilmsFragmentPopup />);
  const component = filmsFragmentPopup();

  it('should render <FilmsFragmentPopup/>  component ', () => {
    expect(component).toMatchSnapshot();
  });

  it('should <PeopleFragmentPopup/> have heading', () => {
    const requiredFields = [
      'Films',
      'Episode:',
      'Director:',
      'Producer:',
      'Release date:',
      'Characters:',
      'Planets:',
      'Vehicles:',
      'Starships:',
      'Species:',
    ];
    expect(component.containsAllMatchingElements(requiredFields)).toBeTruthy();
  });
});
