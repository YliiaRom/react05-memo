import { useMemo, useState } from "react";
import bgImg from "../../assets/img/idPlusInput.jpg";
import styles from "./Calculator.module.css";
import { useInputByNumber } from "../helpers/customHook.js";
import ResultDisplay from "./ResultDisplay.jsx";
function Calculator() {
  const [isOpenTask, setIsOpenTask] = useState(false);
  const [current, setCurrent] = useState(0);

  const itemA = useInputByNumber();
  const itemB = useInputByNumber();

  let sum = useMemo(
    () => itemA.numberValue + itemB.numberValue,
    [itemA.value, itemB.value]
  );

  const handlerClick = () => {
    setCurrent((prev) => prev + 1);
  };
  return (
    <div className="sectionWrap" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="description">
        <p className="decorNum">1</p>
        <h2>калькулятор</h2>
        <div>
          <p>Оптимізація вибіркового рендеру з useMemo та React.memo</p>
        </div>
        <p className="more" onClick={() => setIsOpenTask((v) => !v)}>
          Завдання
        </p>
        {isOpenTask && (
          <div className="moreBody">
            <p>
              Створіть компонент-калькулятор, <br /> який має два незалежні поля
              вводу: <br />
              одне для числа A і одне для числа B. <br /> Також є окремий
              компонент ResultDisplay, який відображає A + B. Обгорніть
              ResultDisplay у React.memo(). Використайте useMemo в батьківському
              компоненті, щоб обчислити A + B і передати цей результат до
              ResultDisplay. Переконайтеся, що ResultDisplay ререндериться лише
              тоді, коли змінюються A або B, а не коли змінюється інший
              незалежний стан у батьківському компоненті (наприклад, лічильник,
              що не впливає на A чи B).
            </p>
          </div>
        )}
      </div>

      <div className="solution">
        <h2> A + B = </h2>
        <div className={styles.calculatorBox}>
          {/* -----результ */}
          <ResultDisplay sum={sum} />

          {/* --num */}
          <div className={styles.numBox}>
            <div>
              <label htmlFor={itemA.id}>Введіть число A </label>

              <input
                type="number"
                id={itemA.id}
                value={itemA.value}
                onChange={itemA.handlerInput}
              />
            </div>
            <div>
              <label htmlFor={itemB.id}>Введіть число B</label>
              <input
                type="number"
                id={itemB.id}
                value={itemB.value}
                onChange={itemB.handlerInput}
              />
            </div>
          </div>

          {/* btn */}

          <button onClick={() => handlerClick()}>Сlick - {current} </button>
        </div>
      </div>
    </div>
  );
}
export default Calculator;
