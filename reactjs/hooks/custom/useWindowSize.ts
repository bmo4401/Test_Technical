import { useState, useEffect } from 'react';

type Size = {
  width: number;
  height: number;
};

function useWindowSize() {
  const [windowSize, setWindowSize] = useState<Size | undefined>();

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Call the handler initially to set the initial size

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
