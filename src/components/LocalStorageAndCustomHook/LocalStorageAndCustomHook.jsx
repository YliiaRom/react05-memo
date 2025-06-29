import { useState } from "react";
import bgImg from "../../assets/img/ls.jpg";
import { useLocalStorage } from "./useLocalStorage";
function LoсalStorageAndCustomHook() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [theme, setTheme] = useLocalStorage("appTheme", "light");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <div className="sectionWrap" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="description">
        <p className="decorNum">9</p>
        <h2>useLocalStorage("appTheme", "light")</h2>
        <div>
          <p>LocalStorage </p>
          <p>Збереження данних в LS (зберегти тему в LS/ відобразити)</p>
        </div>
        <div onClick={() => setIsOpen((v) => !v)} className="more">
          код use...
        </div>
        {isOpen && (
          <div className="moreBody">
            <h2>
              useLocalStorage <br />
              ...return [valueLS, setValueLS];
            </h2>
            <div>
              export const useLocalStorage = (&#123; key, initialValue &#125;)
              =&gt; &#123; <br />
              const getLSvalueTheme = useCallback(() =&gt; &#123;
              <br />
              try &#123;
              <br />
              let item = window.localStorage.getItem(key);
              <br />
              return item ? JSON.parse(item) : initialValue;
              <br />
              &#125; catch (error) &#123;
              <br />
              console.log(error.message);
              <br />
              console.error(`error : $&#123;error&#125;`);
              <br />
              return initialValue;
              <br />
              &#125;
              <br />
              &#125;, [key, initialValue]);
              <br />
              const [valueLS, setValueLS] = useState(getLSvalueTheme);
              <br />
              useEffect(() =&gt; &#123;
              <br />
              try &#123;
              <br />
              window.localStorage.setItem("key", JSON.stringify(valueLS));
              <br />
              &#125; catch (error) &#123;
              <br />
              console.error(`error: $&#123;error&#125;`);
              <br />
              &#125;
              <br />
              &#125;, [key, valueLS]);
              <br />
              return [valueLS, setValueLS];
              <br />
              &#125;;
            </div>
          </div>
        )}
      </div>

      <div className="solution">
        <div>
          <div> Current Thema: {theme}</div>
          <button onClick={toggleTheme}>Change Thema: {theme}</button>
        </div>
        <div className="more" onClick={() => setIsVisible((v) => !v)}>
          code Component
        </div>
        {isVisible && (
          <div className="moreBody">
            <h2>useLocalStorage("appTheme", "light")</h2>
            <div>
              function LoсalStorageAndCustomHook() &#123; const [theme,
              setTheme] = useLocalStorage("appTheme", "light");
              <br />
              const toggleTheme = () =&gt; &#123;
              <br />
              setTheme((prev) =&gt; (prev === "light" ? "dark" : "light"));
              <br />
              &#125;;
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default LoсalStorageAndCustomHook;
