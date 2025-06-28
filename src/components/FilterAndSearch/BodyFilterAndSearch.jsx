import { useState } from "react";
import bgImg from "../../assets/img/every.jpg";
import FilterAndSearchNotDeferred from "./FilterAndSearchNotDeferred";
import FilterAndSearchWithDeferred from "./FilterAndSearchWithDeferred";
const listProducts = Array.from({ length: 2000 }, (_, i) => ({
  id: i,
  name: `Product- ${i + 1}`,
}));

function BodyFilterAndSearch() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sectionWrap" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="description">
        <p className="decorNum">5</p>
        <h2> useDeferredValue(v, initialV)</h2>
        <div>
          <p>
            Пошук та фільтрація в реальному часі <br />
          </p>
          <p>
            Сформувати колекцію з 20 000 продуктів. При введенні значень у поле
            пошуку — виводити список відповідних результатів. <br /> Реалізувати
            два варіанти: <br /> Без використання useDeferredValue() —
            демонструє затримки при введенні. <br /> З використанням
            useDeferredValue() — плавне оновлення списку навіть при великій
            кількості даних
          </p>
          <div className="more" onClick={() => setIsOpen((v) => !v)}>
            more
          </div>
          {isOpen && (
            <div className="moreBody">
              <p>Створення Списка об'єктів = 20000.</p>
              <h2>
                const listProduct = Array.from(&#123; length: 2000 &#125;, (_,
                i) =&gt; (&#123; id: i, name: `Product- $&#123;i + 1&#125;`,
                &#125;));
              </h2>
              <p>
                Перший параметр (зазвичай елемент масиву) не використовується,
                тому його умовно позначили як _. Це просто заглушка — ми його
                ігноруємо, бо нам потрібен лише індекс i. (_, i) =&gt; (&#123;
                ... &#125;) i — індекс
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="solution">
        <div>
          <FilterAndSearchNotDeferred list={listProducts} />
        </div>
        <hr />
        <div>
          <FilterAndSearchWithDeferred list={listProducts} />
        </div>
      </div>
    </div>
  );
}
export default BodyFilterAndSearch;
