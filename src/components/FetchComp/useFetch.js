import { useEffect, useRef, useState } from "react";
const API_BASE_URL = `http://localhost:5058`;

export const useFetch = ({ url }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const abortController = useRef(null);

  useEffect(() => {
    if (!url) return;
    const getDataByUrl = async () => {
      try {
        setError(false);
        setIsLoading(true);

        if (abortController.current) {
          abortController.current.abort();
        }
        // const fullUrl = `${API_BASE_URL}${url}`;
        abortController.current = new AbortController();

        const response = await fetch(url, {
          signal: abortController.current.signal,
        });

        const data = await response.json();

        setData(data);
      } catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getDataByUrl();
  }, [url]);

  return { data, isLoading, error };
};
