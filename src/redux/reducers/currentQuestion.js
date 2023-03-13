import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentQuestion: 0,
}

export const currentQuestionSlice = createSlice({
  name: 'currentQuestion',
  initialState,
  reducers: {
    incrementCurrentQuestion: state => {
      state.currentQuestion += 1
    },
    decrementCurrentQuestion: state => {
      state.currentQuestion -= 1
    },
    resetCurrentQuestion: () => initialState
  },
})

export const { incrementCurrentQuestion, decrementCurrentQuestion, resetCurrentQuestion } = currentQuestionSlice.actions

export default currentQuestionSlice.reducer
