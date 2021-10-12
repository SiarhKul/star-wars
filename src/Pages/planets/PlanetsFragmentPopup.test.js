import { shallow } from 'enzyme';
import React from 'react';
import { PlanetsFragmentPopup } from './PlanetsFragmentPopup';

jest.mock('history', () => ({
  createBrowserHistory: jest.fn(() => ({
    location: {
      state: {
        name: 'Tatooine',
        rotation_period: '23',
        diameter: '10465',
        climate: 'arid',
        gravity: '1 standard',
        terrain: 'desert',
        surface_water: '1',
        population: '200000',
        residents: ['https://swapi.dev/api/people/1/'],
        films: ['https://swapi.dev/api/films/1/'],
      },
    },
  })),
}));

describe('Test <PlanetsFragmentPopup/>', () => {
  const planetsFragmentPopup = () => shallow(<PlanetsFragmentPopup />);
  const component = planetsFragmentPopup();

  it('render snapshot <PlanetsFragmentPopup/>', () => {
    expect(component).toMatchSnapshot();
  });

  it('should  <PlanetsFragmentPopup/> has required fields', () => {
    const requiredFields = [
      'Appearance',
      'Rotation period:',
      'Period period:',
      'Diameter:',
      'Climate:',
      'Gravity:',
      'Terrain:',
      'Surface water:',
      'Population:',
      'Residents:',
      'Films:',
    ];
    expect(component.containsAllMatchingElements(requiredFields)).toBeTruthy();
  });
});
