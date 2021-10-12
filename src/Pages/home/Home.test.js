import React from 'react';
import { Home } from './Home';

describe('Test <Home/>', () => {
  const component = shallow(<Home />);

  it('render snapshot <Home/> ', () => {
    expect(component).toMatchSnapshot();
  });

  it('should <Home/> has image', () => {
    expect(component.find('img')).toHaveLength(1);
  });
});
