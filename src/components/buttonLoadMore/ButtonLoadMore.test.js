import React from 'react';
import { shallow } from 'enzyme';
import * as redux from 'react-redux';
import { ButtonLoadMore } from '..';
import { GET_MORE_PEOPLE } from '../../redux/actions/actions';

describe("Test 'ButtonLoadMore' component", () => {
  const buttonLoadMore = () => shallow(<ButtonLoadMore />);
  const action = {
    type: GET_MORE_PEOPLE,
  };
  let spyOnUseDispatch;
  let mockDispatch;
  let component;

  beforeEach(() => {
    spyOnUseDispatch = jest.spyOn(redux, 'useDispatch');
    mockDispatch = jest.fn();
    spyOnUseDispatch.mockReturnValue(mockDispatch);
    component = buttonLoadMore();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should render 'ButtonLoadMore' ", () => {
    expect(component).toMatchSnapshot();
  });

  it(" do 'ButtonLoadMore' have a className '.btn-load-more'", () => {
    expect(component.find('.btn-load-more')).toHaveLength(1);
  });

  it('should click on button', () => {
    const componentProps = shallow(<ButtonLoadMore action={action} />);
    const btn = componentProps.find('.btn-load-more');
    btn.simulate('click');
    expect(mockDispatch.mock.calls.length).toBe(1);
  });
});
