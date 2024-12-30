import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import FooterLinks from "../src/app/components/FooterLinks";

test("FooterLinks", () => {
  render(<FooterLinks />);
  const linkedin = screen.getByAltText("linkedin");
  const github = screen.getAllByAltText("github");

  expect(linkedin).toBeDefined();
  expect(github).toBeDefined();
});
