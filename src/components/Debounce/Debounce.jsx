import { useMemo, useState } from "react";
import bgImg from "../../assets/img/timer.jpg";
import { useDebounce } from "./useDebounce.js";
const reactHooks = [
  { id: 1, name: "useState" },
  { id: 2, name: "useEffect" },
  { id: 3, name: "useContext" },
  { id: 4, name: "useReducer" },
  { id: 5, name: "useCallback" },
  { id: 6, name: "useMemo" },
  { id: 7, name: "useRef" },
  { id: 8, name: "useImperativeHandle" },
  { id: 9, name: "useLayoutEffect" },
  { id: 10, name: "useDebugValue" },
  { id: 11, name: "useTransition" },
  { id: 12, name: "useDeferredValue" },
  { id: 13, name: "useId" },
  { id: 14, name: "useSyncExternalStore" },
  { id: 15, name: "useInsertionEffect" },
];
function Debounce() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState("");

  const [hookList, setHookList] = useState(reactHooks);

  //--debounce val
  const debounceVal = useDebounce({ val: value, delay: 500 });

  //filter
  const filteredList = useMemo(() => {
    return [...hookList].filter((el) =>
      el.name.toLowerCase().includes(debounceVal.toLowerCase())
    );
  }, [debounceVal]);

  return (
    <div className="sectionWrap" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="description">
        <p className="decorNum">4</p>
        <div>
          <p>useDebounce- відкладений виклик функції</p>
        </div>
        <div className="more" onClick={() => setIsOpen((v) => !v)}>
          Задача 4.
        </div>
        {isOpen && (
          <div>
            <p>
              Створіть кастомний хук useDebounce, який приймає значення та
              затримку в мілісекундах.
              <br /> Він повинен повертати "відкладене" значення, яке
              оновлюється лише після того, як минув заданий час без змін.
              Створіть поле пошуку, де результати пошуку оновлюються не відразу
              після кожного символу, а з невеликою затримкою (наприклад, 500мс)
              після зупинки введення, використовуючи useDebounce.
            </p>
          </div>
        )}
      </div>

      <div className="solution">
        <div>
          <h2>
            поле пошуку, де результати пошуку оновлюються не відразу після
            кожного символу, а з невеликою затримкою (наприклад, 500мс)
          </h2>

          <label>
            назва Хука в react
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Пошук хука ..."
            />
          </label>
          <div className="more" onClick={() => setIsVisible((v) => !v)}>
            Побачити результат
          </div>
          {isVisible && (
            <div>
              {filteredList.length > 0 && (
                <ul className="moreBody">
                  {filteredList.map((item) => (
                    <li key={item.id}>{item.name}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Debounce;
