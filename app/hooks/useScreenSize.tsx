import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth < 976);

  const handleResize = () => {
    setIsScreenSmall(window.innerWidth < 976);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isScreenSmall;
};

export default useScreenSize;
