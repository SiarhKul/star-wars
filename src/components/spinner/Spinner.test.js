import { shallow } from 'enzyme';
import React from 'react';
import { Spinner } from './Spinner';

describe('Test Spinner', () => {
  it('render snapshot <Spinner/>', () => {
    const component = shallow(<Spinner />);

    expect(component).toMatchSnapshot();
  });
});
