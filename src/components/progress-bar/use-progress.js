import { useEffect } from "react";
import { useState } from "react";

const getProgressWidth = () => {
  return (
    Math.floor(
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
        100
    ) + "%"
  );
};

export const useProgress = () => {
  const [progressrWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      console.log("getProgressWidth() ", getProgressWidth());
      setProgressWidth(getProgressWidth());
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return progressrWidth;
};
