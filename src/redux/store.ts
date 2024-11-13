import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import navReducer from "./features/navSlice";

export const store = configureStore({
  reducer: {
    nav: navReducer,
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
