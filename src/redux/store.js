import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slice/filterSlice';

export const store = configureStore({
  reducer: {
    filterReducer,
  },
});
