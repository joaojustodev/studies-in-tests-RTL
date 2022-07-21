import { render } from "@testing-library/react";
import { MenuButton } from ".";

describe("<MenuButton/>", () => {
  it("should render a button", () => {
    expect(render(<MenuButton />));
  });

  it("should render a button with list icon", () => {
    const { getByTestId } = render(<MenuButton />);

    expect(getByTestId("listSvg")).toBeInTheDocument();
  });
});
