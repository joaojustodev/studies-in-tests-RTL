import ColorButton from "../../pages/color-button";
import { render, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { spaceBeforeCapitalLetters } from "../../components/pages/ColorButton/Button";

afterEach(cleanup);

describe("<ColorButton/>", () => {
  it("should be render a button", () => {
    const { getByRole } = render(<ColorButton />);

    const button = getByRole("button", {
      name: "Change color to Midnight Blue",
    });

    expect(button).toBeInTheDocument();
  });

  it("the button should have a correct initial color", () => {
    const { getByRole } = render(<ColorButton />);

    const button = getByRole("button", {
      name: "Change color to Midnight Blue",
    });

    expect(button).toHaveStyle("background: MediumVioletRed");
  });

  it("when to click on the button it should change de color", async () => {
    const { getByRole } = render(<ColorButton />);

    const button = getByRole("button", {
      name: "Change color to Midnight Blue",
    });

    await userEvent.click(button);

    expect(button).toHaveStyle("background: MidnightBlue");
    expect(button.textContent).toBe("Change color to Medium Violet Red");
  });

  it("the checkbox should be checked", async () => {
    const { getByRole } = render(<ColorButton />);

    const checkBox = getByRole("checkbox");

    await userEvent.click(checkBox);

    expect(checkBox).toBeChecked();
  });

  it("button and checkbox should render not disabled and checked", async () => {
    const { getByRole } = render(<ColorButton />);

    const checkBox = getByRole("checkbox");
    const button = getByRole("button", {
      name: "Change color to Midnight Blue",
    });

    expect(checkBox).not.toBeChecked();
    expect(button).not.toBeDisabled();
  });

  it("when checkbox is checked the button should be disabled", async () => {
    const { getByRole } = render(<ColorButton />);

    const checkBox = getByRole("checkbox");
    const button = getByRole("button", {
      name: "Change color to Midnight Blue",
    });

    await userEvent.click(checkBox);

    expect(checkBox).toBeChecked();
    expect(button).toBeDisabled();
  });

  it("Check box disables button on first click and enable button on second click", async () => {
    const { getByRole } = render(<ColorButton />);

    const checkBox = getByRole("checkbox");
    const button = getByRole("button", {
      name: "Change color to Midnight Blue",
    });

    await userEvent.click(checkBox);

    expect(checkBox).toBeChecked();
    expect(button).toBeDisabled();

    await userEvent.click(checkBox);
    expect(checkBox).not.toBeChecked();
    expect(button).not.toBeDisabled();
  });

  it("when button is disabled the background color should be gray", async () => {
    const { getByRole } = render(<ColorButton />);

    const checkBox = getByRole("checkbox");
    const button = getByRole("button", {
      name: "Change color to Midnight Blue",
    });

    await userEvent.click(checkBox);

    expect(checkBox).toBeChecked();
    expect(button).toBeDisabled();
    expect(button).toHaveStyle("background: gray");
  });

  it("when button is disabled the background color should be gray and if the button is enable the background color should be red  ", async () => {
    const { getByRole } = render(<ColorButton />);

    const checkBox = getByRole("checkbox");
    const button = getByRole("button", {
      name: "Change color to Midnight Blue",
    });

    await userEvent.click(checkBox);

    expect(checkBox).toBeChecked();
    expect(button).toBeDisabled();
    expect(button).toHaveStyle("background: gray");

    await userEvent.click(checkBox);

    expect(checkBox).not.toBeChecked();
    expect(button).not.toBeDisabled();
    expect(button).toHaveStyle("background: MediumVioletRed");
  });

  it("when button is clicked the background color should be blue and when is disabled the background color should be gray and is enable the background color should be blue again", async () => {
    const { getByRole } = render(<ColorButton />);

    const checkBox = getByRole("checkbox");
    const button = getByRole("button", {
      name: "Change color to Midnight Blue",
    });

    await userEvent.click(button);

    expect(button).toHaveStyle("background: MidnightBlue");

    await userEvent.click(checkBox);

    expect(checkBox).toBeChecked();
    expect(button).toBeDisabled();
    expect(button).toHaveStyle("background: gray");

    await userEvent.click(checkBox);

    expect(checkBox).not.toBeChecked();
    expect(button).not.toBeDisabled();
    expect(button).toHaveStyle("background: MidnightBlue");
  });
});

describe("space before camel-case capital letters", () => {
  it("Works for no inner capital letters", () => {
    expect(spaceBeforeCapitalLetters("Red")).toBe("Red");
  });

  it("Works for one capital letters", () => {
    expect(spaceBeforeCapitalLetters("MidnightBlue")).toBe("Midnight Blue");
  });

  it("Works for multiple capital letters", () => {
    expect(spaceBeforeCapitalLetters("MediumVioletRed")).toBe(
      "Medium Violet Red"
    );
  });
});
