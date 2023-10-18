import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [isScreenSmall, setIsScreenSmall] = useState<boolean>(() => {
    if (typeof window === "undefined") {
      return false;
    }
    return window.innerWidth < 976;
  });

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setIsScreenSmall(window.innerWidth < 976);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isScreenSmall;
};

export default useScreenSize;
