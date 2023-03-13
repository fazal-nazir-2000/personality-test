import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { render, fireEvent } from '@testing-library/react';
import Result from './Result';
import { useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
jest.mock('react-router-dom', () => {
  return {
    useNavigate: jest.fn(),
  };
});

describe('Result page', () => {
  let store, component;

  beforeEach(() => {
    store = mockStore({
      username: { username: 'Test User' },
      score: { score: 1 },
    });
    component = (
      <Provider store={store}>
        <Result />
      </Provider>
    );
    jest.clearAllMocks();
  });

  it('should display the personality status as Introvert', () => {
    const {getByText} = render(component);
    expect(getByText('Test User you are an Introvert')).toBeInTheDocument();
  });

  it('should display the personality status as Extrovert', () => {
    store.getState().score.score = -1;
    const {getByText} = render(component);
    expect(getByText('Test User you are an Extrovert')).toBeInTheDocument();
  });

  it('should dispatch the correct actions when the "Check Again" button is clicked', () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);
    const {getByText} = render(component);
    fireEvent.click(getByText('Check Again!!'));
    const actions = store.getActions();
    expect(actions).toEqual([
      { type: 'currentQuestion/resetCurrentQuestion'},
      { type: 'score/reset'},
      { type: 'username/setUsername', payload: "" },
    ]);
    expect(navigate).toHaveBeenCalledWith('/');
  });
});
