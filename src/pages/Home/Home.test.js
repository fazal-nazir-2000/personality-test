import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { render, fireEvent, screen} from '@testing-library/react';
import Home from './Home';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Questionbank } from "../../../data/db.json"
import flushPromises from 'flush-promises';
import QuestionsService from '../../service/QuestionService';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
jest.mock('react-router-dom', () => {
  return {
    useNavigate: jest.fn(),
  };
});

describe('Home page', () => {
  let store, component;

  beforeEach(() => {
    store = mockStore({
        username: { username: 'Test User' },
        hoverEffect: { hoverEffect: false },
        questionBank: { questionBank: Questionbank }
    });
    component = (
      <Provider store={store}>
        <Home />
      </Provider>
    );
    jest.clearAllMocks();
  });

  it('Check the heading of the card', () => {
    render(component);
    const heading = screen.getByText(/Take a personality test/i);
    expect(heading).toBeInTheDocument();
  });

  it('Check the value of input tag', () => {
    const { getByTestId } = render(component);
    const input = getByTestId('input-tag');
    expect(input.value).toBe('Test User');
  });

  it('Triggers the setUsername action of username reducer with payload of new assigned value', () => {
    const { getByTestId } = render(component);
    let input = getByTestId('input-tag');
    fireEvent.change(input, { target: { value: 'New User' } });
    expect(store.getActions()).toEqual([{ type: 'username/setUsername', payload: "New User"}]);
  });

  it('Does not navigate to personality test page if username is blank', () => {
    store.getState().username.username = ''
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);
    const { getByRole } = render(component);
    let button = getByRole('button');
    fireEvent.click(button);
    expect(navigate).not.toHaveBeenCalled();
  });

  test("Does not navigate to /test when username is present but data is not present when start button is clicked", () => {
    const mockFetchQuestions = jest.fn().mockResolvedValue({
      data: [],
      error: null,
      hasError: true
    });
    QuestionsService.fetchQuestions = mockFetchQuestions;
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);
    const { getByRole } = render(component);
    let button = getByRole('button');
    fireEvent.click(button);
    expect(navigate).not.toHaveBeenCalled();
  });

  test("Navigates to /test when username and data is present when start button is clicked", async () => {
    const mockFetchQuestions = jest.fn().mockResolvedValue({
      data: Questionbank,
      error: null,
      hasError: false
    });
    QuestionsService.fetchQuestions = mockFetchQuestions;
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);
    const { getByRole } = render(component);
    let button = getByRole('button');
    fireEvent.click(button);
    await flushPromises();
    expect(navigate).toHaveBeenCalledWith('/test');
  });
});
