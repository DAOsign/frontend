import { useRef, useEffect, useState, ReactNode } from "react";
import { createPortal } from "react-dom";
import { overlay } from "./styles";
import { Container } from "theme-ui";

interface Props {
  children: ReactNode;
  isOpen: boolean;
}

export const Portal = ({ children, isOpen }: Props) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#portal");
    setMounted(true);
  }, []);

  return mounted && ref.current && isOpen
    ? createPortal(<Container sx={overlay}>{children}</Container>, ref.current)
    : null;
};
