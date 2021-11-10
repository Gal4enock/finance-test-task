import { createAction} from "@reduxjs/toolkit";


const renderTickersRequest = createAction("tickers/renderRequest");
const renderTickersSuccess = createAction("tickers/renderSuccess");
const renderTickersError = createAction("tickers/renderError");

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  renderTickersRequest,
  renderTickersSuccess,
  renderTickersError
};

