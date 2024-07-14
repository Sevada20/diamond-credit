import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { axiosInstanceAuth } from "@/api/axiosInstance";

const initialState = {
  user: null,
  isAuth: false,
  loading: false,
  error: null,
  accessToken: null,
};

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axiosInstanceAuth.post("singin", userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createUser = createAsyncThunk(
  "auth/createUser",
  async (user, { rejectWithValue }) => {
    try {
      const response = await axios.post("", user);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isAuth = true;
      state.loading = false;
      state.accessToken = action.payload.accessToken;
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(createUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default authSlice.reducer;
