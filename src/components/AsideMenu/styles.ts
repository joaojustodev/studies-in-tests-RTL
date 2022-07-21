import { styled } from "../../../stitches.config";
import { motion } from "framer-motion";

export const Container = styled(motion.aside, {
  position: "relative",
  background: "green",
  display: "none",

  gridColumn: "1/2",
  gridRow: "2/5",

  "@bp2": {
    display: "block",
  },
});

export const AsideMenuContent = styled(motion.div, {
  position: "fixed",
  top: "var(--header-height)",
  bottom: 0,
  zIndex: 2,
  overflowY: "scroll",
  overflowX: "hidden",

  width: "var(--sidemenu-width)",
});
