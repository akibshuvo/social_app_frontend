import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ 
    // baseUrl: "http://localhost:8000"
    baseUrl: import.meta.env.VITE_BACKEND_URL
}),
  endpoints: (builder) => ({
    addUser: builder.mutation({ 
      query: (body) => ({
        url: "/api/v1/auth/regs",
        method: "POST",
        body,
      }) 
    }),
    logedIn: builder.mutation({ 
      query: (body) => ({
        url: "/api/v1/auth/login",
        method: "POST",
        body,
      }) 
    }),
  
  })
})

export const {useAddUserMutation, useLogedInMutation} = authApi 

