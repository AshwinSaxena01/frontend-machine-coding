import { useState } from "react";
import "./GridLights.css";

const DEFAULT_CONFIG = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

const Cell = ({ filled, onCellClick }) => {
  return (
    <div className={filled ? "box active" : "box"} onClick={onCellClick}></div>
  );
};

const GridLights = ({ config = DEFAULT_CONFIG }) => {
  const [order, setOrder] = useState([]);

  const activateCell = (index) => {
    const newOrder = [...order, index];
    setOrder(newOrder);

    if (newOrder.length === config.flat(1).filter(Boolean).length) {
      deactivateCells();
    }
  };

  const deactivateCells = () => {
    const timer = setInterval(() => {
      setOrder((origOrder) => {
        const newOrder = origOrder.slice();
        newOrder.pop();

        if (newOrder.length === 0) {
          clearInterval(timer);
        }

        return newOrder;
      });
    }, 300);
  };

  return (
    <div className="box-container">
      {config.length &&
        config.flat(1).map((item, idx) => {
          return item ? (
            <Cell
              key={idx}
              onCellClick={() => activateCell(idx)}
              filled={order.includes(idx)}
            />
          ) : (
            <span />
          );
        })}
    </div>
  );
};

export default GridLights;
