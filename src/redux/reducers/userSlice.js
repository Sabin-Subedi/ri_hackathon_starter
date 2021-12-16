import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 isLoggedIn: false,
 user: null,
 isAdmin: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state,action) => ({
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
        isAdmin: action.payload.user.isAdmin ?? false

    }),
    logOutUser: (state,action) => ({
        isLoggedIn: false,
        user: null,
        isAdmin: false
    })
  },
})

// Action creators are generated for each case reducer function
export const { loginUser,logOutUser } = userSlice.actions

export const getUser = (state) => state.user.user
export const getIsLoggedIn = (state) => state.user.isLoggedIn

export default userSlice.reducer