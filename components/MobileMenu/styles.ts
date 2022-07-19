import { styled } from "../../stitches.config";

export const Container = styled("div", {
  position: "fixed",
  bottom: 0,
  left: 0,

  background: "$purple600",
  width: "100%",
  height: "var(--header-height)",

  "@bp1": {
    display: "none",
  },
});
