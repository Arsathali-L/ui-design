import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return; // Prevent running if URL is empty

    const fetchData = async () => {
      setLoading(true);
      console.log("Fetching data from:", url);
      try {
        const res = await axios.get(url);
        console.log("API Response:", res.data);
        setData(res.data);
      } catch (err) {
        console.error("Fetch Error:", err.response || err.message);
        setError(err);
      }
      setLoading(false);
    };

    fetchData();
  }, [url]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default useFetch;
