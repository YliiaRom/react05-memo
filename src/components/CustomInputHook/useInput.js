import { useCallback, useState } from "react";

export const useInput = () => {
  const [value, setValue] = useState("");

  const handlerChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const clearInput = useCallback(() => {
    setValue("");
  }, []);
  return {
    value,
    onChange: handlerChange,
    clear: clearInput,
  };
};
