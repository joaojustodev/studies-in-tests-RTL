import { styled } from "../../stitches.config";
import Button from "../components/pages/ColorButton/Button";

const Box = styled("div", {
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const ColorButton = () => {
  return (
    <Box>
      <Button />
    </Box>
  );
};

export default ColorButton;
