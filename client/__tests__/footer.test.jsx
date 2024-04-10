import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "../app/components/Footer";

describe("Footer", () => {
  it("renders gmail link", () => {
    render(<Footer />);

    const elem = screen.getByRole("footer-gmail-link");
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveAttribute("href", "/cloud9/contact");
  });

  it("renders github link", () => {
    render(<Footer />);

    const elem = screen.getByRole("footer-github-link");
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveAttribute("href", "https://github.com/anthonyss09");
  });

  it("renders linkedin link", () => {
    render(<Footer />);

    const elem = screen.getByRole("footer-linkedin-link");
    expect(elem).toBeInTheDocument();
    expect(elem).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/anthony-toffetti-58345b122/"
    );
  });

  it("renders gmail icon", () => {
    render(<Footer />);
    const elem = screen.getByRole("footer-gmail-icon");
    expect(elem).toBeInTheDocument();
  });

  it("renders github icon", () => {
    render(<Footer />);
    const elem = screen.getByRole("footer-github-icon");
    expect(elem).toBeInTheDocument();
  });

  it("renders linkedin icon", () => {
    render(<Footer />);
    const elem = screen.getByRole("footer-linkedin-icon");
    expect(elem).toBeInTheDocument();
  });
});
