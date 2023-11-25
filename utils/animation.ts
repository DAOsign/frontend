import { Variants } from "framer-motion";

export const variants: Variants = {
  hidden: { opacity: 1, height: 0, overflow: "hidden", transition: { type: "linear" } },
  enter: { opacity: 1, height: "fit-content", overflow: "visible", transition: { type: "linear" } },
};

export const variantsSelect: Variants = {
  hidden: { height: "40px", overflow: "hidden" },
  enter: { height: "fit-content", overflow: "auto" },
};

export const variantsCustomSelect: Variants = {
  hidden: { height: "40px", overflowY: "hidden" },
  enter: { height: "fit-content", overflowY: "auto" },
};

export const iconsRotate: Variants = {
  hidden: { rotate: "0deg", x: 0, marginLeft: "auto" },
  enter: { rotate: "-180deg", x: 10, marginLeft: "auto" },
};

export const variantsSelectStatmentOfWork: Variants = {
  hidden: { height: "40px", overflow: "hidden" },
  enter: { height: "fit-content", overflow: "auto" },
};

export const iconsRotateMobile: Variants = {
  hidden: { rotate: "0deg", x: -5, marginLeft: "auto" },
  enter: { rotate: "-180deg", x: 10, marginLeft: "auto" },
};
