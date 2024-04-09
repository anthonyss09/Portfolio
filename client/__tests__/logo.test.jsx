import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Logo from "../app/components/Logo";

describe("Logo", () => {
  it('renders text "Cloud 9"', () => {
    render(<Logo />);

    const elem = screen.getByText("Cloud 9");

    expect(elem).toBeInTheDocument();
  });

  it("renders cloud svg", () => {
    render(<Logo />);

    const elem = screen.getByTitle("cloud-logo");

    expect(elem).toBeInTheDocument();
  });
});
