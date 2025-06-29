import { useDeferredValue, useEffect, useRef, useState } from "react";

export const useDebounce = ({ val, delay }) => {
  const [debounceVal, setDebounceVal] = useState("");

  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setTimeout(
      () => {
        setDebounceVal(val);
      },

      delay
    );
    return () => clearTimeout(intervalRef.current);
  }, [val, delay]);
  return debounceVal;
};
