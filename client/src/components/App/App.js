import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchTickers from '../../redux/tickersOperation';
import selctors from '../../redux/tickersSelector';
import './App.css';

function App() {
  const tickers = useSelector(selctors.getTickers);
  console.log("tickers from app", tickers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTickers())
  }, [dispatch]);

  return (
    <div className="App">
      {tickers?.length > 0 ?
        <h1>Tickers Table</h1> :
        <p>Sorry, no tickers found</p> }
    </div>
  );
}

export default App;
