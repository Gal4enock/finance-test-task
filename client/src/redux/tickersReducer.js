import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import tickerssActions from './tickersActions';

const tickers = createReducer([], {
  [tickerssActions.renderTickersSuccess]: (state, {payload}) => state = payload
})

const list = createReducer([], {
  [tickerssActions.addTickersSuccess]: (state, { payload }) => state.push(payload),
  [tickerssActions.removeTickersSuccess]: (state, { payload }) => state = state.filter((el) => el !== payload)
})

export default combineReducers({tickers, list})

