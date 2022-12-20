import { useState, useEffect } from "react";

interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}

export default function useWindowDimensions(): WindowSize {
  const [windowDimensions, setWindowDimensions] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      let width: number = 0;
      let height: number = 0;
      if (typeof window !== "undefined") {
        width = window.innerWidth;
        height = window.innerHeight;
      }
      setWindowDimensions({
        width,
        height,
      });
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
