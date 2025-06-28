import { useCallback, useId, useState } from "react";
import bgImg from "../../assets/img/word03.jpg";
import LengthGenerateList from "./LengthGeneratList";

const arrItems = ["memo", "useGallback", "useId"];
function LenghtGenerator() {
  const [inputVal, setInputVal] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const inputId = useId();

  console.log("---render LenghtGenerator---");

  const itemsLength = useCallback((item) => {
    console.log(item.length);
  }, []);
  return (
    <div
      className="sectionWrap"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className="description">
        <p className="decorNum">3</p>
        <div>
          <h2> memo() + useCallback()</h2>
          <p>
            Розрбити компонент, що виводить список. При кліку виводити у консоль
            довжину назви.
          </p>
        </div>
      </div>

      <div className="solution">
        <h2>Результат в консолі розробника</h2>

        <div>
          LIST:
          <LengthGenerateList items={arrItems} lengthFunc={itemsLength} />
        </div>

        <label htmlFor={inputId}>name</label>
        <input
          type="text"
          id={inputId}
          val={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        {inputVal}
        <div className="more" onClick={() => setIsOpen((v) => !v)}>
          more
        </div>
        {isOpen && (
          <div className="moreBody">
            <h2>
              memo + useCallback() = відсутність перерендерів при незмінних
              пропсах.
            </h2>
            Під час зміни залежностей усі функції в компоненті створюються
            заново. Тому при передаванні функцій в інші компоненти — вони
            отримують нові (відмінні) функції, що призводить до повторного
            рендеру цих компонентів.
          </div>
        )}
      </div>
    </div>
  );
}
export default LenghtGenerator;
