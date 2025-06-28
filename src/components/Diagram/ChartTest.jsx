import { memo, useDeferredValue, useId, useState } from "react";
import ChartComponent from "./ChartComponent";

function ChartTest({ points }) {
  const [inputVal, setInputVal] = useState("");
  const inputId = useId();

  //--useDeferredValue
  const deferredInputVal = useDeferredValue(inputVal);

  //--
  const data = points.map((point) => ({
    ...point,
    value: Math.sin(point.value + Number(deferredInputVal) || 0) * 50 + 50,
  }));
  return (
    <div>
      <h2>useDeferredValue() з бібліотекою Resharts</h2>
      <label htmlFor={inputId}>
        Введіть число, на скільки точок змістити діаграму
      </label>
      <input
        type="text"
        id={inputId}
        value={inputVal}
        placeholder="зсув..."
        onChange={(e) => setInputVal(e.target.value)}
      />
      <p>{`Введене значення - ${inputVal} `}</p>
      <p>{`"Відкладене" значення - ${inputVal} `}</p>
      <ChartComponent data={data} />
    </div>
  );
}
export default memo(ChartTest);
