import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const RemoveSticky = () => {
  const pathname = useLocation().pathname;

  useEffect(() => {
    document.body.classList.remove("sticky");
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default RemoveSticky;
