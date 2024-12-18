import { useState } from 'react';

const useApiCall = (callFunc, countFunc, withoutLoading) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(null);

  const handleApiCall = (params, callback = () => {}, callbackError = () => {}) => {
    handleLoadingChange(true);
    if (callFunc) {
      callFunc(params)
        .then(res => {
          handleLoadingChange();
          setData(res?.data || []);
          callback(res?.data || []);
        })
        .catch(() => {
          callbackError();
          handleLoadingChange();
        });
    }
    if (countFunc) {
      countFunc(params)
        .then(res => {
          setCount(res?.data || 0);
        })
        .catch(() => {});
    }
  };

  const handleLoadingChange = (value = false) => {
    if (!withoutLoading) {
      setLoading(value);
    }
  };

  const setDefaultValues = () => {
    setData([]);
    setCount(0);
  };

  return [data, loading, handleApiCall, count, setDefaultValues, setData];
};

export default useApiCall;
