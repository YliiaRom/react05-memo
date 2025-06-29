import { memo } from "react";

function GridRow({ el }) {
  return <li>{`${el.name} - ${el.price}$`}</li>;
}
export default memo(GridRow);
