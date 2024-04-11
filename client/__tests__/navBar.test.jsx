import "@testing-library/jest-dom";
import { screen, fireEvent, render } from "@testing-library/react";
import NavBar from "../app/components/NavBar";
import { renderWithProviders } from "../app/utils/test-utils";
import { http, HttpResponse, delay } from "msw";
import { setupServer } from "msw/node";
import Footer from "../app/components/Footer";

export const handlers = [
  http.get("/api/", async () => {
    await delay(150);
    return HttpResponse.json("some response");
  }),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe("NavBar", () => {
  const initialState = {
    alerts: {
      showAlert: false,
      alertType: "",
      alertMessage: "",
    },
  };

  it("renders follow button", () => {
    renderWithProviders(<NavBar />, { preloadedState: initialState });

    const elem = screen.getByRole("button", { name: "+ Follow" });

    expect(elem).toBeInTheDocument();
  });

  it("renders hamburger icon", () => {
    renderWithProviders(<NavBar />, { preloadedState: initialState });

    const elem = screen.getByTitle("hamburger");

    expect(elem).toBeInTheDocument();
  });

  test("renders sidebar on click ", () => {
    renderWithProviders(<NavBar />, { preloadedState: initialState });
    render(<Footer footerId="footer" />);

    const elem = screen.getByRole("sidebar-main");

    fireEvent.click(elem);
  });
});
