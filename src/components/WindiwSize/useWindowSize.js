import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [value, setIsValue] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const sizeWindow = () => {
      setIsValue({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", sizeWindow);
    return () => {
      window.removeEventListener("resize", sizeWindow);
    };
  }, []);

  return value;
};
