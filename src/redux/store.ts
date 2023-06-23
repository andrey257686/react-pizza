import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slice/filterSlice';
import cartReducer from './slice/cartSlice';
import pizzaReducer from './slice/pizzaSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    filterReducer,
    cartReducer,
    pizzaReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
