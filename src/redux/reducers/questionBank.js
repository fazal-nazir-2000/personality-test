import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  questionBank: []
}

export const questionBankSlice = createSlice({
  name: 'questionBank',
  initialState,
  reducers: {
    setQuestionBank: (state, action) => {
      state.questionBank = action.payload
    },
  },
})

export const { setQuestionBank } = questionBankSlice.actions

export default questionBankSlice.reducer
