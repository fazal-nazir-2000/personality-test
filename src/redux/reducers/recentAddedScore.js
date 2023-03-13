import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  recentAddedScore: [],
}

export const recentAddedScoreSlice = createSlice({
  name: 'recentAddedScore',
  initialState,
  reducers: {
    setRecentAddedScore: (state, action) => {
      state.recentAddedScore.push(action.payload)
    },
    getRecentAddedScore: (state) => {
      state.recentAddedScore.pop()
    }
  },
})

export const { setRecentAddedScore, getRecentAddedScore } = recentAddedScoreSlice.actions

export default recentAddedScoreSlice.reducer
