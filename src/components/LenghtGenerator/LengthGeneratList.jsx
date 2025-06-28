import { memo } from "react";

function LengthGenerateList({ items, lengthFunc }) {
  console.log("--start--LengthGenerateList----");
  return (
    <>
      <div>
        {items.map((item, id) => {
          return (
            <button
              key={id}
              onClick={() => lengthFunc(item)}
              style={{ marginBottom: "20px" }}
            >
              {item}
            </button>
          );
        })}
      </div>
    </>
  );
}
export default memo(LengthGenerateList);
