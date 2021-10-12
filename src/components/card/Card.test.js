import { shallow } from 'enzyme';
import React from 'react';
import { BodyCardVehicles } from '../bodyCards/bodyCardVehicles';
import { Card } from './Card';

describe('Test <Card/>', () => {
  const mockedProps = {
    uniqueName: 'Sail bare',
    card: {},
    BodyComponent: BodyCardVehicles,
    onUniqueQueryParam: jest.fn(),
  };
  const component = shallow(<Card {...mockedProps} />);

  it('render snapshot <Card/>', () => {
    expect(component).toMatchSnapshot();
  });

  it('should do click on card', () => {
    const card = component.find('.card');
    expect(mockedProps.onUniqueQueryParam.mock.calls.length).toBe(0);
    card.simulate('click');
    expect(mockedProps.onUniqueQueryParam.mock.calls.length).toBe(1);
  });
});
