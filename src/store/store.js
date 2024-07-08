import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/auth/slice";
import contracts from "./slices/contracts/slice";

export const store = configureStore({
  reducer: {
    auth,
    contracts,
  },
});
