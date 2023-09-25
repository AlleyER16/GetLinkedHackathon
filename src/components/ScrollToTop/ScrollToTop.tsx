import { useEffect, useState } from "react";

import { IonIcon } from "@ionic/react";
import { arrowUpOutline } from "ionicons/icons";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setShow(window.scrollY >= window.innerHeight * 1.5);
    }, 1);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return show ? (
    <a href="#" className="scroll-to-top">
      <IonIcon icon={arrowUpOutline} />
    </a>
  ) : null;
};

export default ScrollToTop;
