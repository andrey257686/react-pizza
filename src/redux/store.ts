import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filter/slice';
import cartReducer from './cart/slice';
import pizzaReducer from './pizza/slice';
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
