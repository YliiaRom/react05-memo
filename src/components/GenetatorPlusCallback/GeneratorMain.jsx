import { useCallback, useId, useState } from "react";
import bgImg from "../../assets/img/task02.jpg";
import GeneratorPlusCallback from "./GeneratorPlusCallback";
function GeneratorMain() {
  const [valueInput, setValueInput] = useState("");
  const inputId = useId();
  const generateRandomNum = useCallback(() => {
    const valNum = Math.random() * 100;
    console.log(valNum);
  }, []);
  return (
    <>
      <div className="sectionWrap" style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="description">
          <p className="decorNum">2</p>
          <div>
            <p>memo + useCallback(()=&gt; &#123;...&#125;, [])</p>
            <p>
              Після натискання викликається функція, яка виводить випадкові
              числа в консоль. Функція розміщена в окремому компоненті, і
              потрібно, щоб при зміні стану input ця функція не створювалась
              заново і не перевідображалась.
            </p>
          </div>
        </div>

        <div className="solution">
          <GeneratorPlusCallback generateNum={generateRandomNum} />
          <div>
            <label htmlFor={inputId}>name</label>
            <input
              type="text"
              value={valueInput}
              id={inputId}
              onChange={(e) => setValueInput(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default GeneratorMain;
