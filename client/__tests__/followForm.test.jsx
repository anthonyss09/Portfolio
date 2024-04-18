import "@testing-library/jest-dom";
import { screen, fireEvent } from "@testing-library/react";
import { renderWithProviders } from "../app/utils/test-utils";
import { http, HttpResponse, delay } from "msw";
import { setupServer } from "msw/node";
import FollowForm from "../app/components/FollowForm";

export const handlers = [
  http.get("/api/", async () => {
    await delay(150);
    return HttpResponse.json({ message: "some response" });
  }),
  http.post("/api/cloud9/add-follower", async () => {
    await delay(150);
    return HttpResponse.json({ message: "add follower response" });
  }),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe("FollowForm", () => {
  const initialState = {
    alerts: {
      showAlert: false,
      alertType: "",
      alertMessage: "",
    },
  };
  it("renders close button", () => {
    renderWithProviders(<FollowForm />, { preloadedState: initialState });
    const elem = screen.getByRole("button", { name: "X" });
    expect(elem).toBeInTheDocument();
  });

  it("renders heading", () => {
    renderWithProviders(<FollowForm />, { preloadedState: initialState });
    const elem = screen.getByRole("heading", { level: 3 });
    expect(elem).toBeInTheDocument();
  });

  it("renders email input label", () => {
    renderWithProviders(<FollowForm />, { preloadedState: initialState });
    const elem = screen.getByText("Email");
    expect(elem).toBeInTheDocument();
  });

  it("renders email input", () => {
    renderWithProviders(<FollowForm />, { preloadedState: initialState });
    const elem = screen.getByRole("input-email");
    expect(elem).toBeInTheDocument();
  });

  it("renders send button", () => {
    renderWithProviders(<FollowForm />, { preloadedState: initialState });
    const elem = screen.getByRole("button", { name: "Send it!" });
    expect(elem).toBeInTheDocument();
  });

  test("send button reaches endpoint", async () => {
    renderWithProviders(<FollowForm />, { preloadedState: initialState });
    const elem = screen.getByRole("button", { name: "Send it!" });
    fireEvent.click(elem);
  });
});
