/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect, useState, ReactNode } from "react";
import { createPortal } from "react-dom";
import { overlay } from "./styles";
import { Container, ThemeUIStyleObject } from "theme-ui";

interface Props {
  children: ReactNode;
  isOpen: boolean;
  onClose?: () => any;
  sx?: ThemeUIStyleObject;
}

export const Portal = ({ children, isOpen, onClose, sx }: Props) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>();

  const handleClickOutside = (e: MouseEvent) => {
    if (e.target === containerRef.current) {
      onClose && onClose();
    }
  };

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#portal");
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return mounted && ref.current && isOpen
    ? createPortal(
        <Container sx={{ ...overlay, ...sx }} ref={el => (containerRef.current = el)}>
          {children}
        </Container>,
        ref.current
      )
    : null;
};
