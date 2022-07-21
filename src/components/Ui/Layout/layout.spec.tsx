import React from "react";
import { cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Layout from "./index";
import { renderWithContext } from "../../../__test__/utils/renderWithContext";

afterEach(() => {
  cleanup();
});

describe("<Layout/>", () => {
  it("should render layout in DOM", () => {
    expect(renderWithContext(<Layout />));
  });

  it("menu must be closed", () => {
    const { getByRole } = renderWithContext(<Layout />);

    const asideMenu = getByRole("menu", { name: /menu latera/i });

    expect(asideMenu).toHaveStyle("width: 0px ");
  });

  it("should open the menu", async () => {
    const { getByTitle, getByRole } = renderWithContext(<Layout />);

    const menuButton = getByTitle("Abrir menu lateral");

    await userEvent.click(menuButton, { delay: 500 });

    const asideMenu = getByRole("menu", {
      name: /menu lateral/i,
    });

    expect(asideMenu).toHaveStyle("width: 220px");
  });

  it("should close the menu", async () => {
    const { getByTitle, getByRole } = renderWithContext(<Layout />);

    const menuButton = getByTitle("Abrir menu lateral");

    await userEvent.click(menuButton, { delay: 500 });

    const asideMenu = getByRole("menu", {
      name: /menu lateral/i,
    });

    expect(asideMenu).toHaveStyle("width: 220px");

    await userEvent.click(menuButton, { delay: 500 });

    expect(asideMenu).toHaveStyle("width: 0px");
  });

  it("should open the menu mobile", async () => {
    const { getByTitle, getByRole } = renderWithContext(<Layout />);

    const menuMobileButton = getByTitle("Abrir menu mobile lateral");

    await userEvent.click(menuMobileButton, { delay: 500 });

    const asideMenuMobile = getByRole("menu", {
      name: /menu mobile lateral/i,
    });

    const overlay = getByRole("presentation", {
      name: /overlay menu mobile lateral/i,
    });

    expect(asideMenuMobile).toHaveStyle("transform: none");
    expect(overlay).toBeInTheDocument();
  });

  it("should close the menu mobile", async () => {
    const { getByTitle, getByRole } = renderWithContext(<Layout />);

    const menuMobileButton = getByTitle("Abrir menu mobile lateral");

    await userEvent.click(menuMobileButton, { delay: 500 });

    const asideMenuMobile = getByRole("menu", {
      name: /menu mobile lateral/i,
    });

    const overlay = getByRole("presentation", {
      name: /overlay menu mobile lateral/i,
    });

    expect(asideMenuMobile).toBeInTheDocument();
    expect(overlay).toBeInTheDocument();

    await userEvent.click(overlay, { delay: 500 });

    expect(asideMenuMobile).toHaveStyle(
      "transform: translateX(-220px) translateZ(0)"
    );
  });
});
