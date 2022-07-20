import React, { ButtonHTMLAttributes } from "react";
import { styled } from "../../../stitches.config";
import { List } from "phosphor-react";
import { CSS } from "@stitches/react/types/css-util";

const Button = styled("button", {});

type MenuButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  css?: CSS;
};

export const MenuButton = (props: MenuButtonProps) => {
  return (
    <Button {...props}>
      <List aria-hidden role="button" size={22} />
    </Button>
  );
};
