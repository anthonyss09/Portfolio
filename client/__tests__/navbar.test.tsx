import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Navbar from "../src/app/components/Navbar";

test("Navbar", () => {
  render(<Navbar />);
  const avatar = screen.getAllByAltText("avatar.svg");
  const github = screen.getAllByAltText("github.svg");
  const linkedin = screen.getAllByAltText("linkedin.svg");
  const mail = screen.getAllByAltText("mail.svg");
  const projectFolder = screen.getAllByAltText("projectFolder.svg");
  expect(github).toBeDefined();
  expect(avatar).toBeDefined();
  expect(linkedin).toBeDefined();
  expect(mail).toBeDefined();
  expect(projectFolder).toBeDefined();
});
