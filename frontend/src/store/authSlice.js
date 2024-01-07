import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth: true,
  user: null,
  
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (setAuth, action) => {
      const { user } = action.payload;
      setAuth.user = user;
      setAuth.isAuth = true;

    }
  },
})

// Action creators are generated for each case reducer function
export const { setAuth } = authSlice.actions;

export default authSlice.reducer