import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BackgroundTwoLong from "../app/components/BackgroundTwoLong";

describe("BackgroundTwoLong", () => {
  it("renders paragraph one", () => {
    render(<BackgroundTwoLong />);
    const elem = screen.getByText("Cloud 9 A concept & a workspace.");
    expect(elem).toBeInTheDocument();
  });
  it("renders paragraph two", () => {
    render(<BackgroundTwoLong />);
    const elem = screen.getByText("Bridge the gap");
    expect(elem).toBeInTheDocument();
  });
  it("renders paragraph three", () => {
    render(<BackgroundTwoLong />);
    const elem = screen.getByText("Between formless & form.");
    expect(elem).toBeInTheDocument();
  });
  it("renders link", () => {
    render(<BackgroundTwoLong />);
    const elem = screen.getByRole("link", { name: "View Projects" });
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveAttribute("href", "/cloud9/work");
  });
  it("renders images", () => {
    render(<BackgroundTwoLong />);
    const elems = screen.getAllByRole("img");
    expect(elems.length).toEqual(7);
  });
});
