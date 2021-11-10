const getTickers = (state) => state.tickers.tickers;
const getStopedTickers = (state) => state.tickers.stopedTickers;

// eslint-disable-next-line import/no-anonymous-default-export
export default  {
  getTickers,
  getStopedTickers,
};