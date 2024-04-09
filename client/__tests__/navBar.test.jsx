import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NavBar from "../app/components/NavBar";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("NavBar", () => {
  const initialState = {
    alerts: {
      showAlert: false,
      alertType: "",
      alertMessage: "",
    },
  };
  const mockStore = configureStore();
  let store;

  it("renders follow button", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <NavBar />
      </Provider>
    );

    const elem = screen.getByRole("button", { name: "+ Follow" });

    expect(elem).toBeInTheDocument();
  });

  it("renders hamburger icon", () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <NavBar />
      </Provider>
    );

    const elem = screen.getByTitle("hamburger");

    expect(elem).toBeInTheDocument();
  });
});

//role button name + follow
//title hamburger
