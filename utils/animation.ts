import { Variants } from "framer-motion";

export const variants: Variants = {
  hidden: { opacity: 1, height: 0, overflow: "hidden" },
  enter: { opacity: 1, height: "fit-content", overflow: "visible" },
  exit: { opacity: 1, height: 0, overflow: "hidden" },
};

export const variantsSelect: Variants = {
  hidden: { opacity: 1, height: 0, overflow: "hidden" },
  enter: {
    overflow: "scroll",
    height: "200px",
    opacity: 1,
  },
  exit: { opacity: 1, height: 0, overflow: "hidden" },
};

export const variantsSelectStatmentOfWork: Variants = {
  hidden: { opacity: 1, height: 0, overflow: "hidden" },
  enter: {
    overflow: "scroll",
    height: "170px",
    opacity: 1,
  },
  exit: { opacity: 1, height: 0, overflow: "hidden" },
};
