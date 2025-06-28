import { memo } from "react";

function GeneratorPlusCallback({ generateNum }) {
  console.log("---start GeneratorPlusCallback--");
  return (
    <>
      <h2>Generator</h2>
      <button onClick={() => generateNum()}> Generate random num in log</button>
    </>
  );
}
export default memo(GeneratorPlusCallback);
