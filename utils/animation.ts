import { Variants } from "framer-motion";

export const variants: Variants = {
  hidden: { opacity: 1, height: 0, overflow: "hidden" },
  enter: { opacity: 1, height: "fit-content", overflow: "visible" },
  exit: { opacity: 1, height: 0, overflow: "hidden" },
};

export const variantsSelect: Variants = {
  hidden: { opacity: 1, height: 0, overflow: "hidden" },
  enter: {
    opacity: 1,
    height: "200px",
    overflow: "scroll",
  },
  exit: { opacity: 1, height: 0, overflow: "hidden" },
};
