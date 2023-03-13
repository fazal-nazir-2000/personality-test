import { configureStore } from '@reduxjs/toolkit'
import scoreReducer from "./reducers/score";
import showScoreReducer from "./reducers/showScore";
import currentQuestionReducer from "./reducers/currentQuestion";
import questionBankReducer from "./reducers/questionBank";
import hoverEffectReducer from "./reducers/hoverEffect";
import usernameReducer from "./reducers/username";
import recentAddedScoreReducer from "./reducers/recentAddedScore";

export const store = configureStore({
  reducer: {
   score: scoreReducer,
   showScore: showScoreReducer,
   currentQuestion: currentQuestionReducer,
   questionBank: questionBankReducer,
   hoverEffect: hoverEffectReducer,
   username: usernameReducer,
   recentAddedScore: recentAddedScoreReducer
  }
})
