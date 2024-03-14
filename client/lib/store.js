import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/api/apiSlice";
import alertsSliceReducer from "./features/alerts/alertsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      alerts: alertsSliceReducer,
      [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  });
};
