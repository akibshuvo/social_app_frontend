import { configureStore } from '@reduxjs/toolkit'
import authSlice from "./userslice/authSlice"
import { authApi } from './api/authApi'


 const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    regitration: authSlice,
  },

  middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(authApi.middleware)
})

export default store