import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Auth } from "../models/Auth";

interface AuthState {
  auth: Auth | undefined;
}

const initialState: AuthState = {
  auth: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<Auth>) => {
      localStorage.setItem("auth", JSON.stringify(action.payload));
      state.auth = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem("auth");
      state.auth = undefined;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
