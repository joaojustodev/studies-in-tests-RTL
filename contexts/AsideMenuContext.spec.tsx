import React from "react";
import { cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AsideMenuContext } from "./AsideMenuContext";
import { renderWithContext } from "../__test__/renderWithContext";

afterEach(() => {
  cleanup();
});

describe("AsideMenuContext", () => {
  it("should be render default menu cycle values", () => {
    const { getByRole } = renderWithContext(
      <AsideMenuContext.Consumer>
        {(value) => (
          <ul>
            <li>{value.asideMenuCycle}</li>
          </ul>
        )}
      </AsideMenuContext.Consumer>
    );

    const listitem = getByRole("listitem");

    expect(listitem).toHaveTextContent("0");
  });

  it("should be render default menu mobile cycle values", () => {
    const { getByRole } = renderWithContext(
      <AsideMenuContext.Consumer>
        {(value) => (
          <ul>
            <li>{value.asideMenuMobileCycle ? 1 : 0}</li>
          </ul>
        )}
      </AsideMenuContext.Consumer>
    );

    const listitem = getByRole("listitem");

    expect(listitem).toHaveTextContent("0");
  });

  it("should be change menu mobile cycle", async () => {
    const { getByRole } = renderWithContext(
      <AsideMenuContext.Consumer>
        {(value) => (
          <>
            <ul>
              <li>{value.asideMenuCycle}</li>
            </ul>
            <button onClick={value.handleAsideMenuCycle}>Clique me</button>
          </>
        )}
      </AsideMenuContext.Consumer>
    );

    const listitem = getByRole("listitem");
    const button = getByRole("button");

    await userEvent.click(button, { delay: 500 });

    expect(listitem).toHaveTextContent("220");
  });

  it("should be change menu mobile cycle", async () => {
    const { getByRole } = renderWithContext(
      <AsideMenuContext.Consumer>
        {(value) => (
          <>
            <ul>
              <li>{value.asideMenuMobileCycle ? 1 : 0}</li>
            </ul>
            <button onClick={value.setAsideMenuMobileCycle}>Clique me</button>
          </>
        )}
      </AsideMenuContext.Consumer>
    );

    const listitem = getByRole("listitem");
    const button = getByRole("button");

    await userEvent.click(button);

    expect(listitem).toHaveTextContent("1");
  });
});
