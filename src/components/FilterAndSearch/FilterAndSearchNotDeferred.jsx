import { memo, useId, useState } from "react";

function FilterAndSearchNotDeferred({ list }) {
  const [isOpen, setIsOpen] = useState(false);
  const [val, setVal] = useState("");
  const inputId = useId();

  console.log("--render FilterAndSearchNotDeferred--");

  const filteredItems = list.filter((el) =>
    el.name.toLowerCase().includes(val.toLowerCase())
  );
  return (
    <>
      <h2>
        Вікорістовуеться фільтрація без useDeferredValue() = тормозить при
        введенні значень в поле пошуку
      </h2>
      <label htmlFor={inputId}>filter + includes</label>
      <input
        type="text"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        placeholder="пошук ..."
        id={inputId}
      />
      <div onClick={() => setIsOpen((v) => !v)} className="more">
        Відкрити перелік елементів
      </div>
      {isOpen && (
        <ul className="moreBody">
          {filteredItems.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      )}
    </>
  );
}
export default memo(FilterAndSearchNotDeferred);
