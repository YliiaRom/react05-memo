import { useState } from "react";

import "./App.css";
import TestId from "./components/TestId/TestId";
import GeneratorMain from "./components/GenetatorPlusCallback/GeneratorMain";
import LenghtGenerator from "./components/LenghtGenerator/LenghtGenerator";
import SortedArr from "./components/SortedArr/SortedArr";
import BodyFilterAndSearch from "./components/FilterAndSearch/BodyFilterAndSearch";
import BodyDiagram from "./components/Diagram/BodyDiagram";
import RequestMain from "./components/Request/RequestMain";
import CustomInputHookBody from "./components/CustomInputHook/CustomInputHookBody";
import LoсalStorageAndCustomHook from "./components/LocalStorageAndCustomHook/LocalStorageAndCustomHook";
import NetworkStatusIndicator from "./components/OnlineStatus/NetworkStatusIndicator";
import Ollimg from "./components/OllImg/OllImg";
import Calculator from "./components/Calculator/Calculator";
import DataGrid from "./components/DataGrid/DataGrid";
import WindowSize from "./components/WindiwSize/WindiwSize";
import Debounce from "./components/Debounce/Debounce";
import HomeTaskSlider from "./components/HomeTaskSlider/HomeTaskSlider";
import FetchComp from "./components/FetchComp/FetchComp";

function App() {
  return (
    <>
      <h1>
        Практика №6 по темам: useId(), memo(),
        <br />
        useCallback(), useMemo(), <br />
        useDeferredValue(), <br />
        Custom Hook - use...
        <br />
        fetch()//
        <br />
        new AbortController() + useRef()
        <br /> (signal, abort()), <br />
        encodeURLComponent(),
      </h1>

      <Calculator />
      <Ollimg />
      <DataGrid />
      <WindowSize />
      <Debounce />
      <HomeTaskSlider />
      <TestId />
      <GeneratorMain />
      <LenghtGenerator />
      <SortedArr />
      <BodyFilterAndSearch />
      <BodyDiagram />
      <RequestMain />
      <CustomInputHookBody />
      <LoсalStorageAndCustomHook />
      <NetworkStatusIndicator />
      <FetchComp />
    </>
  );
}

export default App;
