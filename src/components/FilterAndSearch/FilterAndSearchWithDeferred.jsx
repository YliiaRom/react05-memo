import { memo, useDeferredValue, useId, useState } from "react";

function FilterAndSearchWithDeferred({ list }) {
  const [searchVal, setSearchVal] = useState("");
  const [isOpen, setIsOpen] = useState("");
  const inputID = useId();

  const deferredSearchVal = useDeferredValue(searchVal);

  const filteredList = list.filter((el) =>
    el.name.toLowerCase().includes(deferredSearchVal.toLowerCase())
  );
  console.log("--- render  FilterAndSearchWithDeferred---");
  return (
    <>
      <h2>Використовується фільтр з useDeferredValue() = не тормозить</h2>
      <label htmlFor={inputID}>Введіть дначення для фільтрації</label>
      <input
        type="text"
        placeholder="Пошук ..."
        id={inputID}
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
      />
      <div className="more" onClick={() => setIsOpen((v) => !v)}>
        Відкрити список фільтрації
      </div>
      {isOpen && (
        <div>
          <p> const deferredSearchVal = useDeferredValue(searchVal);</p>
          <p>Фільтруеться по значенню includes(deferredSearchVal)</p>
          <ul className="moreBody">
            {filteredList.map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
      )}
    </>
  );
}
export default memo(FilterAndSearchWithDeferred);
