import { createSlice } from '@reduxjs/toolkit'


export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    value: null,
  },
  reducers: { 
    authuser: (state,actions) => {
    state.value = actions.payload
    }
    
  }
})


export const { authuser } = authSlice.actions

export default authSlice.reducer