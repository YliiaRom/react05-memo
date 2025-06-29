import styles from "./Calculator.module.css";
import { memo } from "react";

function ResultDisplay({ sum }) {
  console.log("---render ResultDisplay---");
  return <div className={styles.result}>{sum}</div>;
}
export default memo(ResultDisplay);
