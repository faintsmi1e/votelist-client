import { useState } from 'react';

export const useFetching = (callback: () => Promise<void>) => {
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState('');

  const fetching = async () => {
    try {
      setIsloading(true);
      await callback();
    } catch (e: any) {
      setError(e.message);
    } finally {
      setIsloading(false);
    }
  };
  return [fetching, isLoading, error] as const;
};
