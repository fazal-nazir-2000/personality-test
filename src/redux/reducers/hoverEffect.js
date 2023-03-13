import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  hoverEffect: false,
}

export const hoverEffectSlice = createSlice({
  name: 'hoverEffect',
  initialState,
  reducers: {
    setHoverEffect: state => {
      if(state.hoverEffect){
        state.hoverEffect = false
      }else{
        state.hoverEffect = true
      }
    }
  },
})

export const { setHoverEffect } = hoverEffectSlice.actions

export default hoverEffectSlice.reducer
