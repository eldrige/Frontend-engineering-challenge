import { useCallback, useEffect, useState } from 'react';
import client from '../api/client';

export const useQuery = (query, params = {}) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState('');

  const refetch = useCallback(async () => {
    setIsloading(true);
    try {
      const responseData = await client.request(query, params);
      if (responseData !== null) {
        setData(responseData);
      }
    } catch (error) {
      setIsloading(false);
      setError(error.message.split(':')[0]);
    }
    setIsloading(false);
  }, [setData, setError, setIsloading]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    console.log(error);
  }, [error]);

  return {
    refetch,
    data,
    isLoading,
    error,
    networkError:
      error === 'Network request failed' ? 'Network request failed' : '',
  };
};
