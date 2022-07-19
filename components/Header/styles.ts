import { styled } from "../../stitches.config";

export const Container = styled("header", {
  display: "flex",
  alignItems: "center",
  gridColumn: "1/3",
  gridRow: "1/2",

  width: "100%",
  height: "var(--header-height)",

  position: "sticky",
  top: 0,
  left: 0,
  zIndex: "3",

  linearGradient: "55deg, $purple600, $purple500",
});

export const LogoBox = styled("div", {
  width: "100%",
  height: "100%",

  display: "flex",
  alignItems: "center",

  px: "$3",
});
