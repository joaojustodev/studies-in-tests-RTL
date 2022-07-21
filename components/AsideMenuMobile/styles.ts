import { styled } from "../../stitches.config";
import { motion } from "framer-motion";

export const Container = styled(motion.div, {});

export const AsideMenuMobileContent = styled(motion.div, {
  position: "fixed",
  top: 0,
  bottom: 0,
  zIndex: 5,

  overflowY: "scroll",
  overflowX: "hidden",

  background: "green",

  width: "var(--sidemenu-width)",
});
