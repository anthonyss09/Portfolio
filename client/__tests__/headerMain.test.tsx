import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import HeaderMain from "../src/app/components/HeaderMain";

test("Navbar", () => {
  render(<HeaderMain />);
  const p1 = screen.getByText("Hi.");
  const anthony = screen.getByText("Anthony Toffetti");
  const lastP = screen.getByText("web developer");

  expect(p1).toBeDefined();
  expect(anthony).toBeDefined();
  expect(lastP).toBeDefined();
});
