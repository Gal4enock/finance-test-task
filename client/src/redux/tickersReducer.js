import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import tickerssActions from './tickersActions';

const tickers = createReducer([], {
  [tickerssActions.renderTickersSuccess]: (state, {payload}) => state = payload
})

export default combineReducers({tickers})

