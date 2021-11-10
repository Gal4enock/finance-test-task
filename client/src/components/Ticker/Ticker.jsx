import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import style from "./Ticker.module.css";

const Ticker = ({ ticker }) => {
 
  const changes = (ticker.price - ticker.change).toFixed(2);

  return (
    <li key={ticker.name} className={style.element}>
      <div className={style.container}>
        <p className={style.value}>{ticker.ticker}</p>
      </div>
      <p className={style.container}>Price: {ticker.price}$</p>
      <p className={style.container}>Today: {changes}$</p>
      <div className={`${style.container} ${style.changedContainer}`}>
        <p
          className={style.value}
          style={{
            backgroundColor: changes > 0 ? "#137333" : "#c5221f",
          }}
        >
          {changes > 0 ? (
            <AiOutlineArrowUp style={{ color: "#FFFFFF" }} />
          ) : (
            <AiOutlineArrowDown style={{ color: "#FFFFFF" }} />
          )}
          {Number(ticker.change_percent).toFixed(2)}
        </p>
      </div>
    </li>
  );
};
export default Ticker;