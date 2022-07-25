import React, { useState } from "react";
import styled from "styled-components";

type ButtonStyledProps = {
  bg: string;
};

export function spaceBeforeCapitalLetters(colorName: string): string {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

export const ButtonSyled = styled.button<ButtonStyledProps>`
  background: ${({ bg }) => bg};

  &:disabled {
    background: gray;
    color: #fff;
  }
`;

const Button: React.FC = () => {
  const [color, setColor] = useState("MediumVioletRed");
  const [disable, setDisable] = useState(false);

  const newButtonColor =
    color === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

  return (
    <>
      <ButtonSyled
        bg={color}
        onClick={() => setColor(newButtonColor)}
        type="button"
        disabled={disable}
      >
        Change color to {spaceBeforeCapitalLetters(newButtonColor)}
      </ButtonSyled>
      <div>
        <input
          type="checkbox"
          name="enable-button-checkbox"
          defaultChecked={disable}
          aria-checked={disable}
          onChange={(e) => setDisable(e.target.checked)}
        />
      </div>
    </>
  );
};

export default Button;
