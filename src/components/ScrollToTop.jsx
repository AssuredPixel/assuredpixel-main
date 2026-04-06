import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // We use a small timeout to ensure the browser has finished rendering the transition
    // and correctly calculates the scroll position.
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto" // "auto" is cleaner for page transitions than "smooth"
    });
  }, [pathname]);

  return null;
};
