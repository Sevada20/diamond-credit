import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getContracts = createAsyncThunk(
  "contracts/getContracts",
  async (page) => {
    const response = await fetch(`/api/contracts?page=${page}&limit=6`);
    const data = await response.json();
    return data;
  }
);

const contractsSlice = createSlice({
  name: "contracts",
  initialState: {
    contracts: [],
    currentPage: 1,
    totalPages: 1,
    status: "idle",
    error: null,
  },
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContracts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getContracts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.contracts = action.payload.contracts;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getContracts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setCurrentPage } = contractsSlice.actions;

export default contractsSlice.reducer;
