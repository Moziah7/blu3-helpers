import { useState, useEffect } from "react";

export const useWidth = (): number => {
  if (typeof window === "undefined") return 0;

  const [width, setWidth] = useState(window?.innerWidth ?? 0);

  useEffect(() => {
    const handleResize = () => setWidth(window?.innerWidth);
    window?.addEventListener("resize", handleResize);
    return () => window?.removeEventListener("resize", handleResize);
  }, []);

  return width;
};
