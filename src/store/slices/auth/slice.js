import { axiosInstanceAuth } from "@/api/axiosInstance";
import axios from "axios";
import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuth: false,
  loading: false,
  error: null,
  accessToken: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axiosInstanceAuth.post("login", userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstanceAuth.post("logout");
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
  reducers: {
    updateAccessToken(state, action) {
      state.accessToken = action.payload;
    },
    clearAuth(state) {
      state.user = null;
      state.isAuth = false;
      state.accessToken = null;
    },
  },
  extraReducers: (builder) => {
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
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.isAuth = true;
      state.loading = false;
      state.accessToken = action.payload.access_token;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(logout.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.user = null;
      state.isAuth = false;
      state.accessToken = null;
      state.loading = false;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { updateAccessToken, clearAuth } = authSlice.actions;

export const selectAuthData = createSelector(
  (state) => state.auth.user,
  (state) => state.auth.isAuth,
  (state) => state.auth.accessToken,
  (user, isAuth, accessToken) => ({
    user,
    isAuth,
    accessToken,
  })
);

export default authSlice.reducer;
