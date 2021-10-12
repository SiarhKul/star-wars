import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Starships } from './Starships';

const mockStore = configureStore();

describe('Test <Starships/>', () => {
  let component;
  let store;

  const getMockInitialStore = (showButton) => ({
    dataFromServer: {
      starships: [],
    },
    loading: {
      isLoadedStarships: showButton,
    },
    router: {
      location: {
        pathname: '/starships',
      },
    },
  });

  const starhips = () => mount(
    <Provider store={store}>
      <Starships />
    </Provider>,
  );

  beforeEach(() => {
    store = mockStore(getMockInitialStore(true));
    component = starhips();
  });

  it('render snapshot <Starships/> ', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render ButtonLoadMore in <Starships/> if  all data has been loaded', () => {
    expect(component.find('ButtonLoadMore').exists()).toBeFalsy();
  });

  it('should render ButtonLoadMore in <Starships/> if  all data has not been loaded', () => {
    store = mockStore(getMockInitialStore(false));
    component = starhips();
    expect(component.find('ButtonLoadMore').exists()).toBeTruthy();
  });

  it('should render alert message in <People/>', () => {
    expect(component.find('ToastContainer')).toHaveLength(1);
  });

  it('should render <People/>', () => {
    expect(component.find('Cards')).toHaveLength(1);
  });
});
