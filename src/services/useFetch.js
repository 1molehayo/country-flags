import { useEffect, useState } from 'react';
import axios from 'services/axios';
import Axios from 'axios';

const useFetch = (url, cached, refresh = false, updateRefresh) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);

    const source = Axios.CancelToken.source();

    const cachedData = localStorage.getItem(cached);

    if (cachedData && !refresh) {
      setData(JSON.parse(cachedData));
      setLoading(false);
      return;
    }

    axios
      .get('/all', { cancelToken: source.token })
      .then((response) => {
        setData(response.data);
        localStorage.setItem(cached, JSON.stringify(response.data));
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
        updateRefresh(false);
      });

    return () => {
      source.cancel();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cached, url, refresh, updateRefresh]);

  return { data, loading, error };
};

export default useFetch;
