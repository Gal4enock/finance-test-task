import { configureStore } from '@reduxjs/toolkit';
import tickersReducer from './tickersReducer';

export const store = configureStore({
  reducer: {
    tickers: tickersReducer
  } 
})