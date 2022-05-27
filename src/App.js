import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const countingPlus = () => {
    const newCount = count + 1;
    setCount(newCount);
    sessionStorage.setItem("count", newCount);
  };
  const countingMinus = () => {
    const newCount = count - 1;
    setCount(newCount);
    sessionStorage.setItem("count", newCount);
  };

  useEffect(() => {
    const items = JSON.parse(sessionStorage.getItem("count"));
    if (items) {
      setCount(items);
    }
  }, []);

  return (
    <div className="main">
      <div className="box">
        <h1 className={count > 0 ? "positive" : count < 0 ? "negative" : null}>
          {count}
        </h1>
        <div className="btn_position">
          <button className="button__wrapper" onClick={countingMinus}>
            -
          </button>
          <button className="button__wrapper" onClick={countingPlus}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
