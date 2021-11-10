import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TickersList from "../TickersList/TickersList.jsx";
import fetchTickers from '../../redux/tickersOperation';
import selctors from '../../redux/tickersSelector';
import './App.css';

function App() {
  const tickers = useSelector(selctors.getTickers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTickers())
  }, [dispatch]);

  return (
    <div className="App">
      {tickers?.length > 0 ?
        <>
          <h1>Tickers Table</h1>
          <TickersList tickers={tickers} />
        </>
        :
        <p>Sorry, no tickers found</p>}
    </div>
  );
}

export default App;
