import { useId, useState } from "react";
import bgImg from "../../assets/img/idPlusInput.jpg";
function TestId() {
  const [isOpenA, setIsOpenA] = useState(false);
  const [isOpenB, setIsOpenB] = useState(false);
  //--b
  const idInput01 = useId();
  const idInput02 = useId();

  //--a
  const arr = [11, 22, 33];
  const idInput = new Date().getTime();
  return (
    <div className="sectionWrap" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="description">
        <p className="decorNum">1</p>
        <div>
          <p>Способи задати ID</p>
          <p>arr + new Date().getTime()</p>
          <p>useID()</p>
        </div>
      </div>

      <div className="solution">
        <div>
          <p className="decorNum">a</p>
          <p>arr + new Date().getTime() / BAD</p>

          <p className="more" onClick={() => setIsOpenA((v) => !v)}>
            practice
          </p>
          {isOpenA && (
            <div className="moreBody">
              <p>Погано- Можно багато сгенерувати одразу = однакові ID </p>

              {arr.map((el, id) => {
                const idInput = new Date().getTime();
                return (
                  <div key={id}>
                    <label htmlFor={idInput}> ID in map</label>
                    <input type="text" id={idInput} />
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div>
          <p className="decorNum">b</p>
          <p> const idInput01 = useId()/ GOOD;</p>
          <span>NO !!! - у списках</span>

          <p className="more" onClick={() => setIsOpenB((v) => !v)}>
            practice
          </p>
          {isOpenB && (
            <div className="moreBody">
              <label htmlFor={idInput01}> const idInput01 = useId();</label>
              <input type="text" id={idInput01} />
              <label htmlFor={idInput02}> const idInput02 = useId();</label>
              <input type="text" id={idInput02} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default TestId;
