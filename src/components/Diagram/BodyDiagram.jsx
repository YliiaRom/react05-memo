import { memo, useState } from "react";
import bgImg from "../../assets/img/schedule.jpg";
import ChartTest from "./ChartTest";

// --данні для діаграми(точки)
const points = Array.from({ length: 1000 }, (_, i) => ({
  name: `Item - ${i + 1}`,
  value: i * 0.1,
}));

function BodyDiagram() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sectionWrap" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="description">
        <p className="decorNum">6</p>
        <div>
          <p>діаграми та візуалізації</p>
          <p>
            Використовується бібліотека Recharts (npmjs.com/package/recharts)
          </p>
        </div>
        <p className="more" onClick={() => setIsOpen((v) => !v)}>
          MORE
        </p>
        {isOpen && (
          <div>
            <h2>npm install recharts</h2>
            <div>
              данні для діаграми(точки) const points = Array.from(&#123; length:
              1000 &#125;, (_, i) =&gt; (&#123; <br />
              name: `Item - $&#123;i + 1&#125;`,
              <br />
              value: i * 0.1, &#125;));
              <br />
            </div>
            <p>
              Значення с затримкою-const deferredInputVal =
              useDeferredValue(inputVal);
            </p>
            <p>+</p>
            <p>
              <span>
                Відхилення залежать від deferredInputVal(значення що ввели)
              </span>
              const data = points.map((point) =&gt; (&#123; <br />
              ...point,
              <br />
              value: Math.sin(point.value +<br /> Number(deferredInputVal) || 0)
              *
              <br />
              50 + 50, &#125;));
            </p>
          </div>
        )}
      </div>

      <div className="solution">
        <div>
          <ChartTest points={points} />
        </div>
      </div>
    </div>
  );
}
export default memo(BodyDiagram);
