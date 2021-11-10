import Ticker from "../Ticker/Ticker";
import style from "./TickersList.module.css";

const TickersList = ({ tickers }) => {
  return (
    <ul className={style.list}>
      {tickers.map(
        (ticker) => ticker && <Ticker ticker={ticker} key={ticker.ticker} />
      )}
    </ul>
  );
};
export default TickersList;