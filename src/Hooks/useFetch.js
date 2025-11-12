import { useState, useEffect } from "react";
import useSecure from "./useSecure";

const useFetch = (endpoint) => {
  const api = useSecure();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!endpoint) return;
    let isMounted = true;
    setLoading(true);

    api
      .get(endpoint)
      .then((res) => {
        if (isMounted) setData(res.data);
      })
      .catch((err) => {
        if (isMounted) setError(err.message);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [endpoint, api]);

  return { data, loading, error };
};

export default useFetch;
