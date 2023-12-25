import { useState, useEffect, useCallback } from 'react';

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  const debounce = useCallback(
    () => {
      const timeoutId = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => clearTimeout(timeoutId);
    },
    [value, delay]
  );

  useEffect(() => {
    debounce();
  }, [value, debounce]);

  return debouncedValue;
};

export default useDebounce;
