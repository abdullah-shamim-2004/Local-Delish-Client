// ✅ useFetch.js
import { useState, useEffect } from "react";
import useSecure from "./useSecure";

const useFetch = (endpoint) => {
  const api = useSecure(); // axios instance
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!endpoint) return;
    setLoading(true);

    api
      .get(endpoint)
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetch;
