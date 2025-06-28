// CustomInputHook;
import { useState } from "react";
import bgImg from "../../assets/img/use.jpg";
import { useInput } from "./useInput";

function CustomInputHookBody() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [nameVal, setNameVal] = useState("");
  const [emailVal, setEmailVal] = useState("");
  const { clear: clearName, ...nameInput } = useInput("");
  const { clear: clearEmail, ...emailInput } = useInput("");

  const handlerSubmit = (e) => {
    e.preventDefault();
    setNameVal(nameInput.value);
    setEmailVal(emailInput.value);
    clearName();
    clearEmail();
  };

  return (
    <div className="sectionWrap" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="description">
        <p className="decorNum">8</p>
        <h2>
          Custom Hook <br />
          useXxxYyy
        </h2>
        <div>
          <p>
            Зробити кастомний хук і передати для різниx полей вводу(useInput.js)
          </p>
          <p>
            Відобразити введенні значення / Почистити значення в полях вводу
            після натіскання кнопки submit
          </p>
        </div>
        <div className="more" onClick={() => setIsOpen((v) => !v)}>
          more
        </div>
        {isOpen && (
          <div className="moreBody">
            <h2>useInput</h2>
            <div>
              export const useInput = () =&gt;&#123; <br />
              const [value, setValue] = useState();
              <br />
              const handlerChange = useCallback((e) =&gt; &#123;
              <br />
              setValue(e.target.value);
              <br />
              &#125;, []);
              <br />
              const clearInput = useCallback(() =&gt; &#123;
              <br />
              setValue("");
              <br />
              &#125;, []);
              <br />
              return &#123;
              <br />
              value,
              <br />
              onChange: handlerChange,
              <br />
              clear: clearInput, &#125;; &#125;;
              <br />
            </div>
          </div>
        )}
      </div>

      <div className="solution">
        <div>
          <form action="#" onSubmit={handlerSubmit}>
            <label>
              name <input type="text" {...nameInput} />
            </label>
            <label>
              email <input type="email" {...emailInput} />
            </label>
            <button type="submit">Submit</button>
          </form>

          <p>name :{nameVal} </p>
          <p>email :{emailVal} </p>
        </div>
        <div
          className="more"
          onClick={() => {
            setIsVisible((v) => !v);
          }}
        >
          підключення кастомного хука
          <br />
          (основні моменти)
        </div>
        {isVisible && (
          <div className="moreBody">
            <p>import &#123;useInput&#125; from "./useInput";</p>
            <h2>
              const nameInput = useInput("");
              <br />
              const emailInput = useInput("");
              <br />
            </h2>
            <p>
              const handlerSubmit = (e) =&gt; &#123;
              <br />
              e.preventDefault();
              <br />
              setNameVal(nameInput.value);
              <br />
              setEmailVal(emailInput.value);
              <br />
              nameInput.clear();
              <br />
              emailInput.clear();
              <br />
              &#125; <br />
              ...
              <br />
              &lt;input type="text" &#123;...nameInput&#125; /&gt;; <br />
              &lt;input type="email" &#123;...emailInput&#125; /&gt;;
            </p>
            <h2>
              !!! const &#123; clear: clearName, ...nameInput &#125; =
              useInput("");
            </h2>
            <p>
              ... clearName(); <br /> clearEmail();
              <br />
              &#125;
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
export default CustomInputHookBody;
