import { useEffect } from 'react';

const useEventListener = (event, handler, passive = false) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener(event, handler, passive);

      return function cleanup() {
        window.removeEventListener(event, handler);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useEventListener;
