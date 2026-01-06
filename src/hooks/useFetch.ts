import { useEffect, useState } from 'react';

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(url);
      const json = await result.json();
      setData(json);
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, loading };
};

export default useFetch;