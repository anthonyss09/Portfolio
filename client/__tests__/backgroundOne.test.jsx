import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BackgroundOne from "../app/components/BackgroundOne";

describe("BackgroundOne", () => {
  it("renders paragraph", () => {
    render(<BackgroundOne />);
    const elem = screen.getByText("Software Development & Design.");
    expect(elem).toBeInTheDocument();
  });

  it("renders images", () => {
    render(<BackgroundOne />);
    const elems = screen.getAllByRole("img");
    expect(elems.length).toEqual(7);
  });
});
