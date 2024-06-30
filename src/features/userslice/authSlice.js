import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  userInfo: JSON.parse(localStorage.getItem("user")) || null,
}


export const userSlice  = createSlice({
  name: 'authUser',
  initialState,
  reducers: { 
    logedUser: (state,action) => {
    state.userInfo = action.payload
    },
    logInUser: (state) => {
    state.userInfo = null
    },
    
  }
})


export const { logedUser,logInUser } = userSlice.actions

export default userSlice.reducer