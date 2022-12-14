import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filter-sclice";
import authReducer from "./auth-sclice";

const store = configureStore({
  reducer: { filters: filterReducer, auth: authReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
