import {
  memo,
  useDeferredValue,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import bgImg from "../../assets/img/shop01.jpg";

import styles from "./Request.module.css";

function RequestMain() {
  const inputId = useId();
  const inputSecond = useId();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [inputSecondValue, setInputSecondValue] = useState("");

  const [productsList, setProductsList] = useState([]);
  const [productsSecondList, setProductsSecondList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSecondLoading, setSecondIsLoading] = useState(false);
  //--AbortController + ref
  const abortControllerRef = useRef(null);

  const deferredInputValue = useDeferredValue(inputValue);

  const deferredInputSecondValue = useDeferredValue(inputSecondValue);

  useEffect(() => {
    async function getProductsList() {
      try {
        setIsLoading(true);

        const res = await fetch(
          `http://localhost:5058/api/products/search?q=${encodeURIComponent(
            deferredInputValue
          )}`,
          { mode: "cors" }
        );
        const data = await res.json();
        setProductsList(data);
      } catch (error) {
        setIsLoading(false);

        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getProductsList();
  }, [deferredInputValue]);

  useEffect(() => {
    //--сказувати запит якщо був
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    //-- в current записати контроллер для signal
    abortControllerRef.current = new AbortController();

    async function getProductBySecondValue() {
      try {
        setSecondIsLoading(true);
        const response = await fetch(
          `http://localhost:5058/api/products/search?q=${encodeURIComponent(
            deferredInputSecondValue
          )}`,
          { signal: abortControllerRef.current.signal }
        );
        const data = await response.json();
        setProductsSecondList(data);
      } catch (error) {
        console.log(error.massage);
      } finally {
        setSecondIsLoading(false);
      }
    }
    getProductBySecondValue();
  }, [deferredInputSecondValue]);
  return (
    <div className="sectionWrap" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="description">
        <p className="decorNum">7</p>
        <h2>
          useDeferredValue() <br /> new AbortController() + useRef() <br />
          (signal / abort ()) <br />q =
          &#123;encodeURIComponent(deferredQuery)&#125;
        </h2>
        <div>
          <p>Відобразити товар з назвами що вводять в поіск</p>
          <p>Зробити запит на BK</p>
          <p>скасувати не потрібні запити</p>
        </div>
      </div>

      <div className="solution" id="4994499049">
        <div>
          <h2>useDeferredValue(inputValue)</h2>
          <label htmlFor={inputId}>Назва товара</label>
          <input
            type="text"
            placeholder="product ..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <p>Значення вводу: {inputValue}</p>
          <p>
            Відкладене значення вводу (useDeferredValue()):{deferredInputValue}
          </p>
          <div className="more" onClick={() => setIsOpen((v) => !v)}>
            Відкрити список
          </div>
          {isLoading ? (
            <p>Завантаження</p>
          ) : (
            <div>
              {isOpen && (
                <ul className={styles.productsBox}>
                  {productsList.length ? (
                    productsList.map((product) => (
                      <li key={product.id}>
                        {
                          <div>
                            <img
                              src={product.imageUrl}
                              alt={product.name}
                              width="50"
                            />

                            <div>{` ${product.name} - ${product.price}`}</div>
                          </div>
                        }
                      </li>
                    ))
                  ) : (
                    <p> Немає результата</p>
                  )}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
      <div className="solution" id="4994499048889">
        <div>
          <h2>
            useRef(null) + <br />
            new AbortController() <br />
            signal
            <br />
            abort() <br />
            encodeURIComponent()
          </h2>
          <label htmlFor={inputSecond}>Назва товара</label>
          <input
            id={inputSecond}
            type="text"
            placeholder="product ..."
            value={inputSecondValue}
            onChange={(e) => setInputSecondValue(e.target.value)}
          />
          <p>Значення вводу: {inputSecondValue}</p>
          <p>
            Відкладене значення вводу (useDeferredValue()):
            {deferredInputSecondValue}
          </p>
          <div className="more" onClick={() => setIsVisible((v) => !v)}>
            Відкрити список
          </div>
          {isSecondLoading ? (
            <p>Завантаження</p>
          ) : (
            <div>
              {isVisible && (
                <ul className={styles.productsBox}>
                  {productsSecondList.length ? (
                    productsSecondList.map((product) => (
                      <li key={product.id}>
                        {
                          <div>
                            <img
                              src={product.imageUrl}
                              alt={product.name}
                              width="50"
                            />

                            <div>{` ${product.name} - ${product.price}`}</div>
                          </div>
                        }
                      </li>
                    ))
                  ) : (
                    <p> Немає результата</p>
                  )}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default memo(RequestMain);
