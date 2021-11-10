import { createAction} from "@reduxjs/toolkit";


const renderTickersRequest = createAction("tickers/renderRequest");
const renderTickersSuccess = createAction("tickers/renderSuccess");
const renderTickersError = createAction("tickers/renderError");
const addTickersRequest = createAction("tickers/addRequest");
const addTickersSuccess = createAction("tickers/addSuccess");
const addTickersError = createAction("tickers/addError");
const removeTickersRequest = createAction("tickers/removeRequest");
const removeTickersSuccess = createAction("tickers/removeSuccess");
const removeTickersError = createAction("tickers/removeError");

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  renderTickersRequest,
  renderTickersSuccess,
  renderTickersError,
  addTickersRequest,
  addTickersSuccess,
  addTickersError,
  removeTickersRequest,
  removeTickersSuccess,
  removeTickersError
};

