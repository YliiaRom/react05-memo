import { useCallback, useId, useState } from "react";

export const useInputByNumber = () => {
  const [value, setValue] = useState("");
  const inputId = useId();

  const handlerInput = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return {
    id: inputId,
    value,
    numberValue: value === "" ? 0 : Number(value),
    handlerInput,
  };
};
