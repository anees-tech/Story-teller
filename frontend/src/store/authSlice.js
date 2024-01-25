import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth: true,
  user: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      const { user, isAuth } = action.payload;
      state.user = user;
      state.isAuth = isAuth;

    }
  },
})

// Action creators are generated for each case reducer function
export const { setAuth } = authSlice.actions;

export default authSlice.reducer