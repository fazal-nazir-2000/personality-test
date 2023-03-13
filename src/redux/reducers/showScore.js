import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showScore: false,
}

export const showScoreSlice = createSlice({
  name: 'showScore',
  initialState,
  reducers: {
    setShowScore: state => {
      if(state.showScore){
        state.showScore = false
      }else{
        state.showScore = true
      }
    }
  },
})

export const { setShowScore } = showScoreSlice.actions

export default showScoreSlice.reducer
