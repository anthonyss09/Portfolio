import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/api/apiSlice";
import alertsSliceReducer from "./features/alerts/alertsSlice";

export const makeStore = (preloadedState) => {
  return configureStore({
    reducer: {
      alerts: alertsSliceReducer,
      [apiSlice.reducerPath]: apiSlice.reducer,
    },
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  });
};
