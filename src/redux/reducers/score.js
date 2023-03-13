import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  score: 0,
}

export const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.score += action.payload
    },
    decrementByAmount: (state, action) => {
      state.score -= action.payload
    },
    reset: () => initialState
  },
})

export const { incrementByAmount, decrementByAmount, reset } = scoreSlice.actions

export default scoreSlice.reducer
