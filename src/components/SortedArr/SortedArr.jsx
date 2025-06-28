import { useId, useState } from "react";
import bgImg from "../../assets/img/scales.jpg";
import SortedArrList from "./SortedArrList";
const arr = [1, 3, 5, 2, 49, 48, 59, 33, 50, 30];
function SortedArr() {
  const [isOpen, setIsOpen] = useState(false);
  const inputId = useId();
  const [inputVal, setInputVal] = useState("");
  console.log("==render SortedArr==");
  return (
    <div className="sectionWrap" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="description">
        <p className="decorNum">4</p>
        <h2>
          useMemo()- обчислити <br />
          (result) //
          <br /> -Для тяжких опраций
        </h2>
        <div>
          <p>Сортування списка</p>
        </div>
      </div>

      <div className="solution">
        <div>
          <p>
            При зміні значення що ввели в консолі розробника не повинно бути
            перерендера компонента SortedArrList:
          </p>
          <label htmlFor={inputId}>name</label>
          <input
            type="text"
            id={inputId}
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
          <p>{inputVal}</p>
          <p>Результат видсортованого [] :</p>
          <SortedArrList list={arr} />
        </div>
        <p onClick={() => setIsOpen((v) => !v)} className="more">
          more
        </p>
        {isOpen && (
          <div className="moreBody">
            <p>const arr = [1, 3, 5, 2, 49, 48, 59, 33, 50, 30];</p>
            <p>[...list].sort((a, b) =&gt; a - b)</p>
            <h2> useMemo(getSortedItems, [list]);</h2>
            <p>
              useMemo + memo = компонент не перерендерюється, якщо list не
              змінюється
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
export default SortedArr;
