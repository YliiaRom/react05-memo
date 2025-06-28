import { memo, useMemo } from "react";

function SortedArrList({ list }) {
  console.log("---render SortedArrList---");
  const getSortedItems = () => [...list].sort((a, b) => a - b);
  const newSortedList = useMemo(getSortedItems, [list]);
  return (
    <>
      {newSortedList.map((el, index) => {
        return <span key={index}>{el} </span>;
      })}
    </>
  );
}
export default memo(SortedArrList);
