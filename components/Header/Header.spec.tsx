import React from "react";
import { render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "./index";
import { renderWithContext } from "../../__test__/renderWithContext";

afterEach(() => {
  cleanup();
});

describe("<Header/>", () => {
  it("should render header in DOM", () => {
    expect(render(<Header />));
  });

  it("should render Logo", () => {
    const { getByText } = render(<Header />);

    expect(getByText("Logo")).toBeInTheDocument();
  });

  it("should render MenuButton", () => {
    const { getByTitle } = render(<Header />);

    expect(getByTitle("Abrir menu lateral")).toBeInTheDocument();
  });

  it("should render MenuMobileButton", () => {
    const { getByTitle } = render(<Header />);

    expect(getByTitle("Abrir menu mobile lateral")).toBeInTheDocument();
  });

  it("menu button title should be to close", async () => {
    const { getByTitle } = renderWithContext(<Header />);

    const menuButton = getByTitle("Abrir menu lateral");

    await userEvent.click(menuButton);

    expect(menuButton).toHaveAttribute("title", "Fechar menu lateral");
  });

  it("menu mobile button title should be to close", async () => {
    const { getByTitle } = renderWithContext(<Header />);

    const menuMobileButton = getByTitle("Abrir menu mobile lateral");

    await userEvent.click(menuMobileButton);

    expect(menuMobileButton).toHaveAttribute(
      "title",
      "Fechar menu mobile lateral"
    );
  });
});
