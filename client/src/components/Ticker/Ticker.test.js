import React from "react";
import { configureStore, createReducer } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import tickerssActions from '../../redux/tickersActions';
import Ticker from './Ticker.jsx';

const startingState =  [
    {
      ticker: "GOOGL",
      exchange: "NASDAQ",
      price: 237.08,
      change: 154.38,
      change_percent: 0.1,
      dividend: 0.46,
      yield: 1.18,
      last_trade_time: "2021-04-30T11:53:21.000Z",
    },
    {
      ticker: "MSFT",
      exchange: "NASDAQ",
      price: 261.46,
      change: 161.45,
      change_percent: 0.41,
      dividend: 0.18,
      yield: 0.98,
      last_trade_time: "2021-04-30T11:53:21.000Z",
    },
  ];

const startingReducer = createReducer(startingState, {
  [tickerssActions.renderTickersSuccess]: (state, { payload }) => state = payload
});

const startingStore = configureStore({
  reducer: {
    tickers: startingReducer
  }
});

function renderWithRedux(component,
  { initialState, store = startingStore } ={}) {
  return {
    ...render(<Provider store={store}>{component}</Provider>)
  }
}

  it('renders Ticker component', async () => {
    const { getByText } = renderWithRedux(<Ticker ticker={startingState[0]}/>);
    expect(getByText(/Price:/i)).toHaveTextContent(startingState[0].price);
    expect(getByText(/Today:/i)).toHaveTextContent(
      (startingState[0].price - startingState[0].change).toFixed(2));

  })
