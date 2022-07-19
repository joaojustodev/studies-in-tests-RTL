import { styled } from "../../../stitches.config";
import { motion } from "framer-motion";

export const Container = styled(motion.main, {
  width: "100%",
  height: "100%",
  position: "relative",

  display: "grid",
  minHeight: "100vh",
  gridTemplateColumns: "auto minmax(0,1fr)",
  gridTemplateRows: "0fr 0fr 1fr 0fr",
  maxWidth: "2560px",
  margin: "0 auto",
});
