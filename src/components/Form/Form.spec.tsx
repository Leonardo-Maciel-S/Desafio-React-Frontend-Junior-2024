import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Form", () => {
  it("Should render form correctly", () => {
    render(<Form />);

    screen.getByTestId("arrow");
    screen.getByPlaceholderText("What needs to be done?");
  });
});
