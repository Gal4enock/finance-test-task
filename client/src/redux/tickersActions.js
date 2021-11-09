import { createAction} from "@reduxjs/toolkit";


const renderTickers = createAction("tickers/render");
const addTickers = createAction("tickers/add");
const removeTickers = createAction("tickers/remove");


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  renderTickers,
  addTickers,
  removeTickers
};

