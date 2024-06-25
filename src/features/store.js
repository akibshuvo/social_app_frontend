import { configureStore } from '@reduxjs/toolkit'
import  authreducer  from './userslice/authSlice'


export default configureStore({
  reducer: {
    authuser: authreducer,
  }
})