import React, { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const pathnem = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathnem]);
  return null;
};

export default ScrollToTop;
