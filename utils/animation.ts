import { Variants } from "framer-motion";

export const variants: Variants = {
  hidden: { opacity: 1, height: 0, overflow: "hidden" },
  enter: { opacity: 1, height: "fit-content", overflow: "visible" },
  exit: { opacity: 1, height: 0, overflow: "hidden" },
};

export const variantsSelect: Variants = {
  hidden: { height: 0, overflow: "hidden", y: -10 },
  enter: { height: "200px", overflow: "auto", y: 0 },
};

export const iconsRotate: Variants = {
  hidden: { rotate: "0deg", x: 0, marginLeft: "auto" },
  enter: { rotate: "-180deg", x: 10, marginLeft: "auto" },
};

export const variantsSelectStatmentOfWork: Variants = {
  hidden: { height: 0, overflow: "hidden", y: -10 },
  enter: { height: "138px", overflow: "auto", y: 0 },
};

export const iconsRotateMobile: Variants = {
  hidden: { rotate: "0deg", x: -5, marginLeft: "auto" },
  enter: { rotate: "-180deg", x: 10, marginLeft: "auto" },
};
