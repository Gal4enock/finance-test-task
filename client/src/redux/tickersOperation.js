import socket from "../services";
import tickersActions from './tickersActions';

const fetchTickers = () => dispatch => {
  dispatch(tickersActions.renderTickersRequest);
  socket.emit("start");
  socket.on("ticker", (response) => {
    console.log("response", response);
    dispatch(tickersActions.renderTickersSuccess(response));
  });
}

export default fetchTickers;