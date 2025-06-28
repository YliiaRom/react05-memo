import { useState } from "react";

import "./App.css";
import TestId from "./components/TestId/TestId";
import GeneratorMain from "./components/GenetatorPlusCallback/GeneratorMain";
import LenghtGenerator from "./components/LenghtGenerator/LenghtGenerator";
import SortedArr from "./components/SortedArr/SortedArr";
import BodyFilterAndSearch from "./components/FilterAndSearch/BodyFilterAndSearch";
import BodyDiagram from "./components/Diagram/BodyDiagram";
import RequestMain from "./components/Request/RequestMain";

function App() {
  return (
    <>
      <h1>Практика по темам: useId(), memo(), useCallback(),</h1>
      <TestId />
      <GeneratorMain />
      <LenghtGenerator />
      <SortedArr />
      <BodyFilterAndSearch />
      <BodyDiagram />
      <RequestMain />
    </>
  );
}

export default App;
