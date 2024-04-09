import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SidebarMain from "../app/components/SidebarMain";

describe("Sidebar", () => {
  it("renders home link", () => {
    render(<SidebarMain />);
    const elem = screen.getByText("Home");
    expect(elem).toBeInTheDocument();
  });
  it("renders blog link", () => {
    render(<SidebarMain />);
    const elem = screen.getByText("Blog");
    expect(elem).toBeInTheDocument();
  });
  it("renders work link", () => {
    render(<SidebarMain />);
    const elem = screen.getByText("Work");
    expect(elem).toBeInTheDocument();
  });
  it("renders contact link", () => {
    render(<SidebarMain />);
    const elem = screen.getByText("Contact");
    expect(elem).toBeInTheDocument();
  });
  it("renders two small clouds svg", () => {
    render(<SidebarMain />);
    const elem = screen.getByTitle("sb-two-small-clouds");
    expect(elem).toBeInTheDocument();
  });
  it("renders cloud small two svg", () => {
    render(<SidebarMain />);
    const elem = screen.getByTitle("sb-cloud-small-two");
    expect(elem).toBeInTheDocument();
  });
});
