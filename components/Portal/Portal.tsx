import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface IPortalProps {
  children: React.ReactNode;
  element: string;
}

const Portal = ({ children, element }: IPortalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(children, document.querySelector(element) as Element)
    : null;
};

export default Portal;
