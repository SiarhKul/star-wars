import React from 'react';
import { BodyCardFilm } from './bodyCardFilm';
import { BodyCardPeople } from './bodyCardPeople';
import { BodyCardPlanets } from './bodyCardPlanets';
import { BodyCardSpecies } from './bodyCardSpecies';
import { BodyCardStarships } from './bodyCardStarships';
import { BodyCardVehicles } from './bodyCardVehicles';

describe('Test bodyCards', () => {
  describe('Test <BodyCardFilm/>', () => {
    it('render snapshot <BodyCardFilm/> ', () => {
      const mockedProps = {
        card: {
          title: 'A New Hope',
          director: 'George Lucas',
          release_date: '1977-05-25',
        },
      };
      const component = shallow(<BodyCardFilm {...mockedProps} />);
      expect(component).toMatchSnapshot();
    });
  });

  describe('Test <BodyCardPeople/> ', () => {
    it('render snapshot <BodyCarPeople/>', () => {
      const mockedProps = {
        card: {
          name: 'Luke Skywalker',
          birth_year: '19BBY',
          gender: 'male',
        },
      };
      const component = shallow(<BodyCardPeople {...mockedProps} />);
      expect(component).toMatchSnapshot();
    });
  });

  describe('Test <BodyCardPlanets/> ', () => {
    it('render snapshot <BodyCarPlanets/>', () => {
      const mockedProps = {
        card: {
          name: 'Tatooine',
          population: 200000,
        },
      };
      const component = shallow(<BodyCardPlanets {...mockedProps} />);
      expect(component).toMatchSnapshot();
    });
  });

  describe('Test <BodyCardPSpecies/> ', () => {
    it('render snapshot <BodyCarPSpecies/>', () => {
      const mockedProps = {
        card: {
          name: 'Human',
          language: 'Galactic Basic',
        },
      };
      const component = shallow(<BodyCardSpecies {...mockedProps} />);
      expect(component).toMatchSnapshot();
    });
  });

  describe('Test <BodyCardStarships/> ', () => {
    it('render snapshot <BodyCarPStarships/>', () => {
      const mockedProps = {
        card: {
          name: 'CR90',
          cost_in_credits: 3500000,
          passengers: 600,
        },
      };
      const component = shallow(<BodyCardStarships {...mockedProps} />);
      expect(component).toMatchSnapshot();
    });
  });

  describe('Test <BodyCardVehicle/> ', () => {
    it('render snapshot <BodyCarVehicle/>', () => {
      const mockedProps = {
        card: {
          name: 'Sand Crawleer',
          mode: 'Digger Crawleer',
          crew: 46,
        },
      };
      const component = shallow(<BodyCardVehicles {...mockedProps} />);
      expect(component).toMatchSnapshot();
    });
  });
});
