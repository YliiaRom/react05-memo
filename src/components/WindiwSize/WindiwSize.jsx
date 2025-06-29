import { useCallback, useMemo, useState } from "react";
import bgImg from "../../assets/img/window.jpg";
import { useWindowSize } from "./useWindowSize";

import styles from "./WindowSize.module.css";

function WindowSize() {
  const [isOpenTaskVal, setIsOpenTaskVal] = useState(false);
  const [isVisibleCode, setIsVisibleCode] = useState(false);
  const { width, height } = useWindowSize();
  const valIcon = useMemo(() => {
    if (width > 1200)
      return (
        <span role="img" aria-label="monitor">
          🖥️
        </span>
      );
    else if (width >= 600 && width < 1200)
      return (
        <span role="img" aria-label="laptop">
          💻
        </span>
      );
    else
      return (
        <span role="img" aria-label="phone">
          📱
        </span>
      );
  }, [width, height]);

  return (
    <div className="sectionWrap" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="description">
        <p className="decorNum">3</p>
        <h2>
          useMemo / <br />
          .addEventListener(
          <br />
          "resize"...
        </h2>
        <div>
          <p>useWindowSize- розмір вікна браузера</p>
        </div>
        <div className="more" onClick={() => setIsOpenTaskVal((v) => !v)}>
          Завдання
        </div>
        <div onClick={() => setIsVisibleCode((v) => !v)} className="more">
          Code
        </div>
        {isOpenTaskVal && (
          <div className="moreBody">
            <p>
              Створіть кастомний хук useWindowSize, який повертає поточну ширину
              та висоту вікна браузера.
              <br />
              Він повинен оновлюватися при зміні розміру вікна.
              <br /> Створіть компонент, який відображає поточні розміри вікна
              браузера (ширина x висота), використовуючи useWindowSize.
              <br /> На основі розмірів відображати іконки монітора, планшета
              або телефона.
            </p>
          </div>
        )}

        {isVisibleCode && (
          <div className="moreBody">
            <p>
              export const useWindowSize = () =&gt; &#123; <br />
              const [value, setIsValue] = useState(&#123;
              <br />
              width: window.innerWidth,
              <br />
              height: window.innerHeight,
              <br />
              &#125;);
              <br />
              useEffect(() =&gt; &#123;
              <br />
              const sizeWindow = () =&gt; &#123;
              <br />
              setIsValue(&#123;
              <br />
              width: window.innerWidth,
              <br />
              height: window.innerHeight,
              <br />
              &#125;);
              <br />
              &#125;;
              <br />
              window.addEventListener("resize", sizeWindow);
              <br />
              return () =&gt; &#123;
              <br />
              window.removeEventListener("resize", sizeWindow);
              <br />
              &#125;;
              <br />
              &#125;, []);
              <br />
              return value;
              <br />
              &#125;;
              <br />
            </p>
          </div>
        )}
      </div>

      <div className="solution">
        <div>
          <h2>поточнa ширина та висота вікна браузера</h2>
          <p>{`Ширіна: ${width} / Высота : ${height}`}</p>
          <div className={styles.iconSize}> {valIcon}</div>
        </div>
        <h2> const &#123;width, height&#125; = useWindowSize();</h2>
      </div>
    </div>
  );
}
export default WindowSize;
