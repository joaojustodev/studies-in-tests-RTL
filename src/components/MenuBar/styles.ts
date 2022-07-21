import { styled, css } from "../../../stitches.config";

export const Container = styled("footer", {
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

export const MenuBarList = styled("ul", {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyCenter: "center",
  margin: "0 auto",
});

export const MenuBarListItem = styled("li", {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRight: "1px solid rgba(0,0,0,0.2)",
});

export const MenuBarListItemButton = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",

  border: "none",
  backgroundColor: "transparent",
  color: "$gray100",
});
