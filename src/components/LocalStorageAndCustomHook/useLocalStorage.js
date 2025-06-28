import { useCallback, useEffect, useState } from "react";

export const useLocalStorage = ({ key, initialValue }) => {
  const getLSvalueTheme = useCallback(() => {
    try {
      let item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error.message);
      console.error(`error : ${error}`);
      return initialValue;
    }
  }, [key, initialValue]);
  const [valueLS, setValueLS] = useState(getLSvalueTheme);

  useEffect(() => {
    try {
      window.localStorage.setItem("key", JSON.stringify(valueLS));
    } catch (error) {
      console.error(`error: ${error}`);
    }
  }, [key, valueLS]);

  return [valueLS, setValueLS];
};
