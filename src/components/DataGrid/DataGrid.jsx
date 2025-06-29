import { useCallback, useDeferredValue, useMemo, useState } from "react";
import bgImg from "../../assets/img/grid.jpg";
import GridRow from "./GridRow";
import { useInput } from "../CustomInputHook/useInput";
const arrData = Array.from({ length: 3000 }, (_, i) => ({
  id: i + 1,
  name: `Product №${i + 1}`,
  price: +(Math.random() * 1000).toFixed(2),
}));
function DataGrid() {
  const [isOpenTaskVal, setisOpenTaskVal] = useState(false);
  const [visibleList, setIsVisibleList] = useState(false);

  const [productsList, setProductsList] = useState(arrData);
  const [sortVal, setSortVal] = useState("");

  //--custome hook
  const { value, onChange, clear } = useInput();
  //--useDeferredVal
  const deferredInputVal = useDeferredValue(value);

  //--useCallback
  const handlerName = useCallback(() => setSortVal("name"), []);
  const handlerUp = useCallback(() => setSortVal("up"), []);
  const handlerDown = useCallback(() => setSortVal("down"), []);

  //-- useMemo- sort
  const sortedProducts = useMemo(() => {
    let listProducts = [...productsList];

    if (
      deferredInputVal !== "" &&
      !isNaN(deferredInputVal) &&
      sortVal === "up"
    ) {
      listProducts = listProducts.filter((el) => el.price > +deferredInputVal);
    }
    if (
      deferredInputVal !== "" &&
      !isNaN(deferredInputVal) &&
      sortVal === "down"
    ) {
      listProducts = listProducts.filter((el) => el.price < +deferredInputVal);
    } else if (deferredInputVal !== "") {
      listProducts = listProducts.filter((el) =>
        el.name.toLowerCase().includes(deferredInputVal.toLowerCase())
      );
    }

    if (sortVal === "up") {
      listProducts.sort((a, b) => a.price - b.price);
    }
    if (sortVal === "down") {
      listProducts.sort((a, b) => b.price - a.price);
    } else if (sortVal === "name") {
      listProducts.sort((a, b) => a.name.localeCompare(b.name));
    }

    return listProducts;
  }, [deferredInputVal, sortVal]);

  return (
    <div className="sectionWrap" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="description">
        <p className="decorNum">2</p>
        <div>
          <p>Таблиця з фільтрацією та сортуванням, чутлива до UI</p>
        </div>
        <div className="more" onClick={() => setisOpenTaskVal((v) => !v)}>
          Задача 2
        </div>
        {isOpenTaskVal && (
          <div className="moreBody">
            <p>
              Створіть компонент DataGrid (батьківський) та GridRow (дочірній).
              <br />
              DataGrid отримує великий масив даних, має поле вводу для
              фільтрації, кнопки для сортування за різними колонками.
              <br /> GridRow (обгорнутий у React.memo) відображає один рядок
              даних. Використайте useDeferredValue для пошукового запиту та/або
              параметрів сортування. Використайте useMemo для обчислення
              відфільтрованих та відсортованих даних на основі відкладених
              значень. Використайте useCallback для функцій-обробників
              сортування та інших інтерактивних елементів, які передаються до
              дочірніх компонентів. Мета: забезпечити швидкий відгук на введення
              та кліки, навіть якщо обробка даних займає час.
            </p>
          </div>
        )}
      </div>

      <div className="solution">
        <h2>фільтрація та сортування</h2>
        <div>
          <label>
            введіть значення:
            <input
              type="text"
              value={value}
              onChange={onChange}
              placeholder="пошук ..."
            />
          </label>

          <p>Сортувати за назвою або номером</p>
          <button onClick={handlerName}>name / №</button>
          <p>Сортувати за ціною</p>
          <button onClick={handlerUp}>Up +</button>
          <button onClick={handlerDown}>Down -</button>
          <div className="more" onClick={() => setIsVisibleList((v) => !v)}>
            Розгорнути список
          </div>
          {visibleList && (
            <div className="moreBody">
              {sortedProducts.length > 0 && (
                <ul>
                  {sortedProducts.map((el) => (
                    // <li key={el.id}>{`${el.name} - ${el.price}$`}</li>
                    <GridRow el={el} key={el.id} />
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
export default DataGrid;
