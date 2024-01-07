import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  //Redux extension

const store = configureStore({
  reducer: {
    auth:authSlice,
  },
});

export default store;
