import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { render, fireEvent } from '@testing-library/react';
import PersonalityTest from './PersonalityTest';
import { useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Questionbank } from "../../../data/db.json"

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
jest.mock('react-router-dom', () => {
  return {
    useNavigate: jest.fn(),
  };
});

describe('Personality Test page', () => {
  let store, component;

  beforeEach(() => {
    store = mockStore({
      questionBank: { questionBank: Questionbank },
      currentQuestion: { currentQuestion: 0},
      recentAddedScore: { recentAddedScore: []}
    });
    component = (
      <Provider store={store}>
        <PersonalityTest />
      </Provider>
    )
    jest.clearAllMocks();
  });

  it('Check that there are 4 answer options provided', () => {
    const { container } = render(component);
    const classElement = container.getElementsByClassName('button_style');
    expect(classElement.length).toBe(4);
  });

  it('Checks that required reducer actions are dispatched with correct payload', () => {
    const { getByText } = render(component);
    fireEvent.click(getByText(Questionbank[0].answers[0].content));
    const actions = store.getActions();
    expect(actions).toEqual([
      { type: 'score/incrementByAmount', payload: 2},
      { type: 'recentAddedScore/setRecentAddedScore', payload: 2},
      { type: 'currentQuestion/incrementCurrentQuestion'},
    ]);
  });

  it('Navigates to result page when an answer on the last question is selected', () => {
    store.getState().currentQuestion.currentQuestion = 4
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);
    const { getByText } = render(component);
    fireEvent.click(getByText(Questionbank[4].answers[0].content));
    expect(navigate).toHaveBeenCalledWith('/result');
  });

  it('Checks that back button is not present in page if its the first question', () => {
    const { queryByText } = render(component);
    expect(queryByText('Back')).not.toBeInTheDocument()
  });

  it('Checks that back button is present in page if its not the first question', () => {
    store.getState().currentQuestion.currentQuestion = 1
    const { queryByText } = render(component);
    expect(queryByText('Back')).toBeInTheDocument()
  });

  it('Checks that correct actions with correct payload are dispatched on click of "Back" button', () => {
    store.getState().currentQuestion.currentQuestion = 1
    store.getState().recentAddedScore.recentAddedScore = [2]
    const { getByText } = render(component);
    fireEvent.click(getByText('Back'))
    const actions = store.getActions();
    expect(actions).toEqual([
      { type: 'score/decrementByAmount', payload: 2},
      { type: 'currentQuestion/decrementCurrentQuestion'},
      { type: 'recentAddedScore/getRecentAddedScore'},
    ]);
  });

});
