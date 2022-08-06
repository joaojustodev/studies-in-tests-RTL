import Button from "../components/pages/ColorButton/Button";
import styled from "styled-components";

const Box = styled.div`
  width: "100vw";
  height: "100vh";
  display: "flex";
  align-items: "center";
  justify-content: "center";
`;

const ColorButton = () => {
  return (
    <Box>
      <Button />
    </Box>
  );
};

export default ColorButton;
